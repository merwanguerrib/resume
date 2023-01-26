import React, { useContext } from 'react';
import { ResumeContext } from '../../../context';

export const PersonalInterests: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.personalInterestsData;
  return (
    <div className="p-7 block-section flow-root">
      <h2 className="block-title">Personal Interests</h2>
      <div className="-m-2 flex flex-wrap"></div>
      {data.list.map((interest, index) => (
        <p key={index}>{`${interest.emoji} ${interest.name}`}</p>
      ))}
    </div>
  );
}
