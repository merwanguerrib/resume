import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isResumeActive =
    location.pathname === '/resume' || location.pathname === '/';
  const isBlogActive = location.pathname.startsWith('/blog');

  return (
    <ul className="flex items-center space-x-8 text-sm font-semibold text-muted">
      <li>
        <Link
          to="/resume"
          className={`transition duration-300 hover:text-primary ${
            isResumeActive
              ? 'text-primary'
              : 'text-muted'
          }`}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          className={`transition duration-300 hover:text-primary ${
            isBlogActive
              ? 'text-primary'
              : 'text-muted'
          }`}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};
