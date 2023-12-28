import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Bio: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.bioData;
  return (
    <div className="Bio">
      <h2 className="block-title">About me</h2>
      <p className="text-gray-600 mb-5">{data.catchPhrase}</p>
      <p>{data.bio}</p>
      <div className="flex flex-col space-y-4">
        {data.qualities && (
          <ul className="flex space-x-8">
            {data.qualities.map((quality, index) => (
              <li className="text-l mail-link " key={index}>
                {quality}
              </li>
            ))}
          </ul>
        )}
        <ul className="flex space-x-5">
          <li>
            <a
              href="https://www.linkedin.com/in/merwanguerrib/"
              className="social-link-hover"
            >
              <i className="bx bxl-linkedin-square text-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mrwn211" className="social-link-hover">
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/merwanguerrib"
              className="social-link-hover"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
          </li>
          <li>
            <span className="social-link-hover">
              <span>merwanguerrib@gmail.com</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-200 my-5"></div>
    </div>
  );
};
