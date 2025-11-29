'use client';

import { useEffect } from 'react';
import "@/styles/error.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="error-container">
          <div className="error-content">
            <div className="error-code">500</div>
            <h1 className="error-title">Something Went Wrong</h1>
            <p className="error-description">
              An unexpected error occurred. We apologize for the inconvenience.
              Please try refreshing the page or contact support if the problem persists.
            </p>
            {error.digest && (
              <p className="error-digest">Error ID: {error.digest}</p>
            )}
            <div className="error-actions">
              <button onClick={reset} className="btn btn-primary">
                Try Again
              </button>
              <button onClick={() => window.location.href = '/'} className="btn btn-secondary">
                Go to Dashboard
              </button>
            </div>
          </div>
          <div className="error-illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" opacity="0.2"/>
              <path d="M100 60 L100 110" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="100" cy="135" r="5" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </body>
    </html>
  );
}