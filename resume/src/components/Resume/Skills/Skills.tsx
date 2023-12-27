import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Skills: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.skillsData;
  return (
    <div className="p-7 block-section flow-root">
      <h2 className="block-title">Skills</h2>
      <div className="-m-2 flex flex-wrap">
        {data.list.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
