import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const PersonalInterests: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.personalInterestsData;
  return (
    <div className="PersonalInterests p-7 block-section flow-root">
      <h2 className="block-title">Personal Interests</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.list.map((interest, index) => (
          <p key={index}>{`${interest.emoji} ${interest.name}`}</p>
        ))}
      </div>
    </div>
  );
};
