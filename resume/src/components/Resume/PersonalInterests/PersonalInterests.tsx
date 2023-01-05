import React from 'react';
import { PersonalInterestsListInterface } from '../../../interfaces';

interface PersonalInterestsProps {
  data: PersonalInterestsListInterface
}

export const PersonalInterests: React.FC<PersonalInterestsProps> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>Personal Interests</h2>
      {data.list.map((interest, index) => (
        <div key={index}>
          <p>{interest.emoji} {interest.name}</p>
        </div>
      ))}
    </div>
  );
}
