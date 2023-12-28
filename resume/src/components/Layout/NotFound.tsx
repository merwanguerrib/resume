import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/404.png';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-xl font-semibold mb-2">Oops! That's an airball!</h1>
      <p className="mb-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/resume"
        className="text-lg bg-[#8b5cf6] text-white font-bold py-2 px-4 mb-2 rounded"
      >
        Go to Resume
      </Link>
      <img
        src={notFoundImage}
        alt="Page Not Found"
        className="max-w-full h-auto mt-2 rounded-xl shadow-lg"
      />
    </div>
  );
};

export default NotFoundPage;
