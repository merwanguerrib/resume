import React, { useContext } from "react";
import { ResumeContext } from '../../../context';

export const Bio: React.FC = () => {
  const context = useContext(ResumeContext)
  const data = context.bioData;
  return (
    <div className="p-7 pb-0 block-section">
      <h2 className="block-title">About me</h2>
      <p className="text-gray-600 mb-5">{data.catchPhrase}</p>
      <p>{data.bio}</p>
      <div className="flex flex-col space-y-4">
        <div className="mail-link social-link-hover">
          <i className="bx bx-at text-xl"></i>
          <span>merwanguerrib@gmail.com</span>
        </div>
        <ul className="flex space-x-5">
          <li>
            <a href="https://www.linkedin.com/in/merwanguerrib/" className="social-link-hover">
              <i className='bx bxl-linkedin-square text-2xl' ></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mrwn211" className="social-link-hover">
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/merwanguerrib" className="social-link-hover">
              <i className="bx bxl-github text-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-200 my-5"></div>
      {data.qualities && (
        <ul className="flex space-x-8">
          {data.qualities.map((quality, index) => (
            <li key={index}>{quality}</li>
          ))}
        </ul>
      )}
      <div className="border-t border-gray-200 my-5"></div>
      <ul className="flex space-x-8 font-medium">
        <li>
          <a href="/personal_cv/index.html" className="menu-link-active menu-link-hover">Resume</a>
        </li>
        <li>
          <a href="/personal_cv/products.html" className="menu-link menu-link-hover">Products</a>
        </li>
        <li>
          <a href="/personal_cv/blog.html" className="menu-link menu-link-hover">Blog</a>
        </li>
      </ul>
    </div>
  );
}