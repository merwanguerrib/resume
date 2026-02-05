/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/404.png';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="mb-2 text-xl font-semibold text-ink">
        Oops! That's an airball!
      </h1>
      <p className="mb-4 text-sm text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/resume"
        className="mb-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-primary-dark"
      >
        Go to Home
      </Link>
      <img
        src={notFoundImage}
        alt="Page Not Found"
        className="mt-2 h-auto max-w-full rounded-2xl shadow-soft"
      />
    </div>
  );
};

export default NotFoundPage;
