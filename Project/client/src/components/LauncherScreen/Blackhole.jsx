import { useEffect, useRef } from 'react';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  ShaderMaterial,
  PlaneGeometry,
  Mesh,
  Timer,
} from 'three';

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  #define PI 3.14159265359

  void main() {
    vec2 p = vUv - 0.5;
    float r = length(p) * 2.0;
    if (r > 1.0) {
      gl_FragColor = vec4(0.0);
      return;
    }
    float a = atan(p.y, p.x);

    float EH = 0.72; // event horizon radius — large dark core

    // Pure black core with a razor-thin photon-sphere rim
    if (r < EH) {
      float rim = smoothstep(EH - 0.008, EH - 0.001, r);
      vec3 rimCol = vec3(1.0, 0.75, 0.35) * rim * 0.9;
      gl_FragColor = vec4(rimCol, 1.0);
      return;
    }

    // Keplerian-ish differential rotation: faster closer to the horizon
    float rot = uTime * 0.55 / pow(max(r, 0.05), 0.9);

    // Discrete circling sparks: tile the ring in (angle, radius) cells and
    // place one tiny bright point per cell with a random orbital phase.
    float sparks = 0.0;
    const float TAU = 6.2831853;
    for (int L = 0; L < 3; L++) {
      float layer = float(L);
      float angDiv = 80.0 + layer * 40.0;   // # sparks around the ring per layer
      float radDiv = 6.0 + layer * 3.0;     // # radial bands in the thin ring
      float cellA = TAU / angDiv;
      float radLo = EH + 0.005;
      float radHi = 0.99;
      float rr = (r - radLo) / (radHi - radLo);
      if (rr < 0.0 || rr > 1.0) continue;
      // Angular cell index, shifted by rotation so sparks orbit
      float aShift = a + rot * (0.6 + layer * 0.15);
      float ai = floor(aShift / cellA);
      float af = fract(aShift / cellA);
      float ri = floor(rr * radDiv);
      float rf = fract(rr * radDiv);
      vec2 cell = vec2(ai, ri + layer * 17.0);
      // Random spark position inside the cell + random twinkle phase
      float hx = hash(cell);
      float hy = hash(cell + 3.17);
      float hp = hash(cell + 7.91);
      vec2 sp = vec2(hx, hy);
      vec2 d = vec2(af, rf) - sp;
      // Make sparks elongated tangentially for streak feel
      d.x *= 0.45;
      float dist2 = dot(d, d);
      float twinkle = 0.6 + 0.4 * sin(uTime * (2.0 + hp * 4.0) + hp * 6.28);
      float spark = exp(-dist2 * 140.0) * twinkle;
      sparks += spark * (0.9 - layer * 0.2);
    }

    // Thin bright filament hugging the horizon
    float filament = pow(abs(sin(a * 32.0 + rot * 6.0)), 50.0)
                   * smoothstep(EH + 0.04, EH, r);
    sparks += filament * 0.8;

    // Radial envelope: thin ring — fade up from horizon, fade down to outer
    float inner = smoothstep(EH, EH + 0.015, r);
    float outer = 1.0 - smoothstep(0.93, 1.0, r);
    float env = inner * outer;

    // Temperature gradient across the thin ring
    vec3 hot  = vec3(1.00, 0.96, 0.78);
    vec3 mid  = vec3(1.00, 0.63, 0.22);
    vec3 cool = vec3(0.65, 0.22, 0.05);
    vec3 col = mix(hot, mid, smoothstep(EH, EH + 0.12, r));
    col = mix(col, cool, smoothstep(EH + 0.12, 0.98, r));

    col *= sparks * env * uIntensity;

    // Soft outer halo (additive bloom hint) hugging the thin ring
    float halo = exp(-pow((r - (EH + 0.08)) * 10.0, 2.0)) * 0.35 * uIntensity;
    col += mix(hot, mid, 0.5) * halo * outer;

    float alpha = outer;
    gl_FragColor = vec4(col, alpha);
  }
`;

export default function Blackhole({ intensity = 1.0, className, style }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uIntensity: { value: intensity },
    };
    const material = new ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
    });
    const geom = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geom, material);
    scene.add(mesh);

    const setSize = () => {
      const w = Math.max(1, mount.clientWidth);
      const h = Math.max(1, mount.clientHeight);
      renderer.setSize(w, h, false);
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(mount);

    const timer = new Timer();
    let raf = 0;
    let running = true;
    const tick = () => {
      if (!running) return;
      timer.update();
      uniforms.uTime.value = timer.getElapsed();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        tick();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisibility);
      ro.disconnect();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      geom.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [intensity]);

  return (
    <div
      ref={mountRef}
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
