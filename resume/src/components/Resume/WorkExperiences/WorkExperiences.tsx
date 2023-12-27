import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const WorkExperiences: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.workExperienceData;
  return (
    <div className="WorkExperiences p-7 block-section">
      <h2 className="block-title">Work Experience</h2>
      {data.list.map((experience, index) => (
        <div className="mb-5 item-section" key={index}>
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover"
            style={{ backgroundImage: `url(${experience.logo})` }}
          ></div>
          <div className="w-full space-y-5">
            <div className="item-header">
              <div className="space-y-1.5">
                <div className="font-medium">{experience.position}</div>
                <div className="flex space-x-5">
                  <div className="item-header-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>{experience.company}</span>
                  </div>
                  <div className="item-header-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>{experience.city}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:text-right">
                <div className="job-item-badge">Full time</div>
                <div className="item-header-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>
                    {experience.startDate.toLocaleDateString()} –
                    {experience.endDate
                      ? experience.endDate.toLocaleDateString()
                      : 'Present'}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">{experience.description}</p>
            {experience.projects && (
              <ul className="list-disc list-outside">
                {experience.projects.map((project) => {
                  return project.description.map((description) => (
                    <li key={description}>{description}</li>
                  ));
                })}
              </ul>
            )}
            <div className="border-b border-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
