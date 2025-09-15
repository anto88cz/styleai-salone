// filepath: src/components/ErrorBoundary.tsx
import React from "react";
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <div>Qualcosa è andato storto. Ricarica la pagina.</div>;
    return this.props.children;
  }
}
export default ErrorBoundary;