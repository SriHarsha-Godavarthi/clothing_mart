import Link from "next/link";
import "@/styles/error.css";

export default function NotFound() {
    return (
        <div className="error-container">
            <div className="error-content">
                <div className="error-code">404</div>
                <h1 className="error-title">Page Not Found</h1>
                <p className="error-description">
                    Sorry, we couldn't find the page you're looking for.
                    The page might have been removed, renamed, or doesn't exist.
                </p>
                <div className="error-actions">
                    <Link href="/" className="btn btn-primary">
                        Go to Dashboard
                    </Link>
                    <button onClick={() => window.history.back()} className="btn btn-secondary">
                        Go Back
                    </button>
                </div>
            </div>
            <div className="error-illustration">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" opacity="0.2"/>
                    <path d="M70 85 L85 70 M85 85 L70 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M115 85 L130 70 M130 85 L115 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M70 130 Q100 110 130 130" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
}