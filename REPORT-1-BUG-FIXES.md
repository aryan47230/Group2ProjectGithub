# Bug Fixes Report - Brancher (Skill Tree Generator + Wiki Hopper)

> **Self-contained instructions for Claude Sonnet.** Read this entire document before making changes. Each bug has the exact file path, the problem, and the fix to implement.

## Project Structure

- **Project root:** The folder containing this file (with `Project/` subfolder)
- **Backend:** `Project/server.js` (Express, port 3000)
- **Frontend:** `Project/client/` (React + Vite, port 5173)
- **Components:** `Project/client/src/components/`
- **Contexts:** `Project/client/src/context/`
- **Routes:** `Project/client/src/routes/`
- **Styles:** `Project/client/src/styles/`

---

## Bug 1: Explore Route Shows Infinite "Loading Concept" When No Topic Provided

**Severity:** High  
**File:** `Project/client/src/routes/ExploreRoute.jsx`

**Problem:** When a user navigates to `/explore` without a `?q=` query parameter (e.g., by clicking "Explore" in the navbar), the page shows "LOADING CONCEPT" forever with a pulsing dot. There is no way to exit this state. The `ExploreShell` component checks `Boolean(currentConcept)` which is null, and the `AutoJump` component does nothing because there's no `q` param.

**Fix:** When there is no query parameter AND no concept is loaded AND the app is not loading, show a search prompt instead of the loading spinner. Modify the `ExploreShell` component:

In `Project/client/src/routes/ExploreRoute.jsx`, find the `ExploreShell` function. Change the rendering logic so that when `!ready && !loading && !pendingTopic`, it shows the AppHeader, the Topbar with the search box, and a centered prompt telling the user to search for a concept, instead of showing the `ExploreLoader`. The `ExploreLoader` should only show when `loading` is true or `pendingTopic` is truthy.

Replace the `ExploreShell` function with logic like:

```jsx
function ExploreShell({ onSignIn, onSignUp, pendingTopic }) {
  const { currentConcept, loading } = useExplorer();
  const ready = Boolean(currentConcept);
  const showLoader = !ready && (loading || pendingTopic);
  const showEmptyState = !ready && !loading && !pendingTopic;

  useEffect(() => {
    if (ready) {
      window.dispatchEvent(new CustomEvent('explore:ready'));
    }
  }, [ready]);

  return (
    <>
      {showLoader && <ExploreLoader topic={pendingTopic || '...'} />}
      {(ready || showEmptyState) && (
        <>
          <AppHeader onSignIn={onSignIn} onSignUp={onSignUp} />
          <Topbar />
        </>
      )}
      {showEmptyState && (
        <div style={{
          position: 'fixed', inset: 0, background: '#000000',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 18, zIndex: 800,
          fontFamily: "var(--font-display, 'Outfit'), sans-serif",
          paddingTop: 120,
        }}>
          <div style={{
            color: 'rgba(255,200,90,0.85)', fontSize: 13,
            letterSpacing: 4, textTransform: 'uppercase',
            textShadow: '0 0 10px rgba(255,170,64,0.5)',
          }}>
            Wiki Hopper
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 15,
            letterSpacing: 1, maxWidth: 400, textAlign: 'center',
          }}>
            Use the search bar above to explore any concept
          </div>
        </div>
      )}
      <div
        className={styles.app}
        style={{
          visibility: ready ? 'visible' : 'hidden',
          background: '#000000',
        }}
      >
        <div className={styles.main}>
          <div className={styles.leftPanel}><ConceptPanel /></div>
          <div className={styles.rightPanel}>
            <ErrorBoundary>
              <KnowledgeGraph />
            </ErrorBoundary>
            <TrailSidebar />
          </div>
        </div>
      </div>
      <JourneyOverlay />
    </>
  );
}
```

---

## Bug 2: Auth Modal Does Not Display Error Messages to User

**Severity:** High  
**File:** `Project/client/src/components/Auth/AuthModal.jsx`

**Problem:** When login or registration fails (wrong password, username taken, etc.), the error is only logged to `console.error`. The user sees nothing - the modal just stays open with no feedback. The `error` state variable exists but is never rendered in the JSX.

**Fix:** Add error message display to the modal. Find the `AuthModal` component in `Project/client/src/components/Auth/AuthModal.jsx`. After the password input field and before the submit button, add an error display element:

```jsx
{error && (
  <p
    style={{
      color: '#ff6b6b',
      fontSize: 12,
      letterSpacing: 1,
      textTransform: 'uppercase',
      textAlign: 'center',
      margin: '8px 0 0',
      textShadow: '0 0 8px rgba(255,107,107,0.4)',
    }}
    role="alert"
  >
    {error}
  </p>
)}
```

Also make sure the `catch` block in the submit handler properly sets the error state. Find the catch block and ensure it does:
```jsx
setError(err?.message || 'Something went wrong');
```

Also clear the error when the user switches tabs (login/register toggle) by adding `setError('')` at the start of the mode switch handler.

---

## Bug 3: Missing favicon.ico Causes 404 Console Error

**Severity:** Low  
**File:** `Project/client/index.html` and `Project/client/public/`

**Problem:** The browser requests `/favicon.ico` on every page load and gets a 404 error in the console. This is a minor issue but shows up in every console log.

**Fix:** Add a favicon. Create a simple SVG favicon that matches the dark/gold theme. In `Project/client/index.html`, add inside the `<head>` tag:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

Then create `Project/client/public/favicon.svg` with a simple gold circle on black background:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#000" stroke="#ffaa40" stroke-width="2"/>
  <circle cx="16" cy="16" r="8" fill="none" stroke="#ffd27a" stroke-width="1.5" opacity="0.7"/>
</svg>
```

---

## Bug 4: THREE.Clock Deprecation Warnings Flooding Console

**Severity:** Low  
**File:** `Project/client/src/components/LauncherScreen/Blackhole.jsx`

**Problem:** The console shows repeated `THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.` warnings (7+ times). This comes from the Blackhole component using `THREE.Clock` for animation timing.

**Fix:** In `Project/client/src/components/LauncherScreen/Blackhole.jsx`, find where `THREE.Clock` is instantiated (look for `new THREE.Clock()`). Replace it with `THREE.Timer`:

```jsx
// Before:
const clock = new THREE.Clock();
// In the animation loop:
const elapsed = clock.getElapsedTime();

// After:
const timer = new THREE.Timer();
// In the animation loop:
timer.update();
const elapsed = timer.getElapsed();
```

Note: `THREE.Timer` requires manual `update()` calls in the animation loop, unlike `Clock` which auto-updates. Make sure to call `timer.update()` at the start of each animation frame before reading the elapsed time.

---

## Bug 5: Skill Tree / Home Route Missing AppHeader (No Navigation Bar)

**Severity:** Medium  
**File:** `Project/client/src/routes/SkillTreeRoute.jsx`

**Problem:** When on the `/` or `/skill-tree` routes, there is NO navigation bar (AppHeader). The user has no way to navigate to the Explore page or access Sign In/Sign Up except by manually editing the URL. The AppHeader only appears after generating a skill tree (in the TreeView), but on the PromptView (home/input screen) there is no navigation at all.

**Fix:** In `Project/client/src/routes/SkillTreeRoute.jsx`, import and render the `AppHeader` component at the top of the route, before the PromptView/TreeView content. The AppHeader should always be visible on the SkillTreeRoute.

Find where the component returns its JSX. Add AppHeader import at the top:
```jsx
import AppHeader from '../components/AppHeader/AppHeader';
```

Then in the returned JSX, add the AppHeader before the existing content. You'll also need to manage the auth modal state (same pattern as ExploreRoute):

```jsx
export default function SkillTreeRoute({ hideExplore }) {
  const [authMode, setAuthMode] = useState(null);
  // ... existing state ...

  return (
    <>
      <AppHeader
        onSignIn={() => setAuthMode('login')}
        onSignUp={() => setAuthMode('register')}
      />
      {/* existing content - PromptView or TreeView */}
      {authMode && (
        <AuthModal initialMode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </>
  );
}
```

Import `AuthModal` as well:
```jsx
import AuthModal from '../components/Auth/AuthModal';
```

**Important:** The TreeView component already shows its own subheader with "Back" button and topic name - make sure this doesn't conflict. The AppHeader should sit above everything. You may need to add `padding-top` or `margin-top` to the main content area to account for the fixed AppHeader height.

---

## Bug 6: Password Input Not Masked in Auth Modal

**Severity:** Medium  
**File:** `Project/client/src/components/Auth/AuthModal.jsx`

**Problem:** Looking at the snapshot, the password field uses a regular `textbox` type. Check if the password input has `type="password"`. If not, the password is visible as plain text while typing.

**Fix:** In `Project/client/src/components/Auth/AuthModal.jsx`, find the password input element and ensure it has `type="password"`:

```jsx
<input
  type="password"
  className={styles.input}
  placeholder=""
  value={password}
  onChange={e => setPassword(e.target.value)}
/>
```

---

## Bug 7: Debounce Cleanup Missing in Topbar Search

**Severity:** Low  
**File:** `Project/client/src/components/Topbar/Topbar.jsx`

**Problem:** The Topbar uses a `setTimeout` for debouncing search input, but if the component unmounts while a debounce timer is pending, the timer fires after unmount, potentially calling `setState` on an unmounted component (React warning) or triggering an unintended API call.

**Fix:** In `Project/client/src/components/Topbar/Topbar.jsx`, find the debounce logic (likely in a `useEffect` or event handler). Store the timeout ID in a ref and clear it on cleanup:

```jsx
const debounceRef = useRef(null);

// In the search handler:
const handleSearchChange = (e) => {
  const val = e.target.value;
  setQuery(val);
  clearTimeout(debounceRef.current);
  debounceRef.current = setTimeout(() => {
    // perform search
  }, 300);
};

// In a useEffect cleanup:
useEffect(() => {
  return () => clearTimeout(debounceRef.current);
}, []);
```

---

## Bug 8: Duplicate `assignCluster` Function

**Severity:** Low (code quality)  
**Files:** `Project/client/src/components/JourneyOverlay/JourneyOverlay.jsx` AND `Project/client/src/components/TrailSidebar/TrailSidebar.jsx`

**Problem:** The `assignCluster` function (which categorizes Wikipedia topics into clusters like Science, History, Arts, etc.) is duplicated in both files with the same implementation. If the cluster keywords change, both files need to be updated.

**Fix:** Extract the `assignCluster` function into a shared utility file.

1. Create `Project/client/src/utils/clusters.js`:

```js
const CLUSTER_KEYWORDS = {
  Science: ['physics','chemistry','biology','math','quantum','atom','molecule','cell','gene','evolution','theory','equation','experiment','scientific'],
  Technology: ['computer','software','algorithm','programming','internet','digital','data','network','machine','robot','artificial','code','system','engineering'],
  History: ['war','empire','dynasty','century','ancient','medieval','revolution','colonial','kingdom','civilization','archaeological','historical','era','period'],
  Arts: ['music','art','painting','sculpture','literature','poetry','dance','theater','film','novel','composer','artist','genre','movement'],
  Philosophy: ['philosophy','ethics','logic','metaphysics','epistemology','existential','moral','consciousness','thought','reason','dialectic','ontology'],
  Geography: ['country','continent','ocean','mountain','river','island','city','region','territory','landscape','climate','population','capital'],
};

export function assignCluster(title) {
  const t = (title || '').toLowerCase();
  for (const [cluster, keywords] of Object.entries(CLUSTER_KEYWORDS)) {
    if (keywords.some(k => t.includes(k))) return cluster;
  }
  return 'General';
}
```

2. In both `JourneyOverlay.jsx` and `TrailSidebar.jsx`, remove the local `assignCluster` function and import from the shared file:

```jsx
import { assignCluster } from '../../utils/clusters';
```

---

## Testing Checklist

After implementing fixes, verify:

- [ ] Navigate to `/explore` without a query param - should show search prompt, not infinite loader
- [ ] Try login with wrong credentials - should show error message in the modal
- [ ] Try registration with short password - should show validation error
- [ ] Check browser console for favicon 404 - should be gone
- [ ] Check browser console for THREE.Clock warnings - should be gone
- [ ] Navigate between Skill Tree and Explore using the navbar from any page
- [ ] Password field should mask input with dots
- [ ] Run `npm run dev` in client folder and verify no build errors
