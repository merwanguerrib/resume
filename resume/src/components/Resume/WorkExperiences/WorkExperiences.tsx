import React from "react";
import { WorkExperienceListInterface } from "../../../interfaces";

interface WorkExperiencesProps {
  data: WorkExperienceListInterface;
}

export const WorkExperiences: React.FC<WorkExperiencesProps> = (props) => {
  const { data } = props;
  return (
    <div className="p-7 block-section">
      <h2>Work Experience</h2>
      {data.list.map((experience, index) => (
        <div className="mb-5 item-section" key={index}>
          <div className="company-logo" style={{ backgroundColor: "#1DA1F2" }}>
            <i className="bx bxl-twitter text-3xl"></i>
          </div>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>
                    `${experience.startDate.toDateString()} – $
                    {experience.endDate
                      ? experience.endDate.toDateString()
                      : "Present"}
                    `
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">{experience.description}</p>
            <div className="border-b border-gray-200"></div>
          </div>
          {/* {experience.projects && (
              <>
                <h4>Projects</h4>
                <ul>
                  {experience.projects.map((project, index) => (
                    <li key={index}>
                      <p>Description: {project.description}</p>
                      <p>Technos: {project.technos}</p>
                    </li>
                  ))}
                </ul>
              </>
            )} */}
        </div>
      ))}
    </div>
  );
};