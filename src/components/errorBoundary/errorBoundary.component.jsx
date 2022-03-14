/** @format */

import React from "react";
import { ErrorBoundaryContainer, ErrorImage } from "./errorBoundary.style";

class ErrorBoundary extends React.Component {
  state = {
    haseError: false,
  };

  static getDerivedStateFromError(error) {
    return { haseError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.haseError) {
      return (
        <ErrorBoundaryContainer>
          <ErrorImage
            alt="error"
            src="https://www.answersreviews.com/wp-content/uploads/2020/06/Fix-Error404-on-WordPress-780x400.jpg"
          />
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
