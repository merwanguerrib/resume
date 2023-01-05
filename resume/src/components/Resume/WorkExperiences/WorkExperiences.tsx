import React from 'react';
import { WorkExperienceListInterface } from '../../../interfaces';

interface WorkExperiencesProps {
  data: WorkExperienceListInterface;
}

export const WorkExperiences: React.FC<WorkExperiencesProps> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>Work Experience</h2>
      {data.list.map((experience, index) => (
        <div key={index}>
          <h3>{experience.company}</h3>
          <p>Position: {experience.position}</p>
          <p>Description: {experience.description}</p>
          <p>City: {experience.city}</p>
          {experience.projects && (
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
          )}
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
        </div>
      ))}
    </div>
  );
};
