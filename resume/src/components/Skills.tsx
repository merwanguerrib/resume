import React from 'react';
import { SkillListInterface } from '../interfaces';

interface Props {
  data: SkillListInterface;
}

export const Skills: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {data.list.map((skill, index) => (
          <li key={index}>
            <p>Name: {skill.name}</p>
            <p>Level: {skill.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
