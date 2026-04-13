import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          height: '100%', width: '100%', background: 'var(--bg-primary, #06090f)',
          color: 'rgba(226, 232, 240, 0.7)', fontFamily: "'Outfit', sans-serif", gap: '16px',
        }}>
          <p style={{ fontSize: '14px', color: 'rgba(200, 210, 225, 0.45)' }}>
            Something went wrong in the graph renderer.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '10px 24px', borderRadius: '8px', border: '1px solid rgba(0, 212, 255, 0.25)',
              background: 'rgba(0, 212, 255, 0.06)', color: 'rgba(0, 212, 255, 0.8)',
              cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            RETRY
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
