import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', color: '#DC2626', backgroundColor: 'white', height: '100vh', width: '100vw', overflow: 'auto', zIndex: 9999, position: 'fixed', top: 0, left: 0 }}>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>⚠️ Error Crítico Detectado</h1>

                    <div style={{ marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937' }}>Mensaje del Error:</h2>
                        <pre style={{ padding: '15px', backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '16px', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                            {this.state.error && this.state.error.toString()}
                        </pre>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937' }}>Dónde ocurrió (Stack Trace):</h2>
                        <pre style={{ padding: '15px', backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '12px', whiteSpace: 'pre-wrap', fontFamily: 'monospace', overflowX: 'auto' }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
