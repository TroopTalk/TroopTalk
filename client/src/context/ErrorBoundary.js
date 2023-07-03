import React from "react";

// ErrorBoundary component to catch and handle errors
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>An error occurred while rendering this page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;