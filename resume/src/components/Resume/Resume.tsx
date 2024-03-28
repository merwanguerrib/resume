import React from 'react';
import { WorkExperiences } from './WorkExperiences/WorkExperiences';
import { Education } from './Education/Education';

export const Resume: React.FC<
  React.PropsWithChildren<Record<string, never>>
> = () => {
  return (
    <div className="Resume">
      <WorkExperiences />
      <Education />
    </div>
  );
};
