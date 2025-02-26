import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="error-container d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <div className="mb-4">
          <div className="emoji mb-3">😕</div>
          <h2 className="h4 mb-3">Page Not Found</h2>
          <p className="text-muted">The page you're looking for doesn't exist.</p>
        </div>
        <Link to="/" className="btn btn-primary px-4 py-2">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;