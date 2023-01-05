import React from 'react';
import { EducationListInterface } from '../../interfaces';

interface EducationProps {
  data: EducationListInterface;
}

export const Education: React.FC<EducationProps> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>Education</h2>
      {data.list.map((education, index) => (
        <div key={index}>
          <h3>{education.school}</h3>
          <p>Degree: {education.degree}</p>
          <p>Specialization: {education.specialization}</p>
          <p>City: {education.city}</p>
          <p>Date: {education.date}</p>
        </div>
      ))}
    </div>
  );
};
