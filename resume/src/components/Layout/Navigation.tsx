import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isResumeActive =
    location.pathname === '/resume' || location.pathname === '/';
  const isBlogActive = location.pathname.startsWith('/blog');

  return (
    <ul className="Navigation flex space-x-8 font-medium">
      <li>
        <Link
          to="/resume"
          className={`menu-link ${
            isResumeActive ? 'menu-link-active' : ''
          } menu-link-hover`}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          className={`menu-link ${
            isBlogActive ? 'menu-link-active' : ''
          } menu-link-hover`}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};
