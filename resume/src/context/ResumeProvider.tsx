import React from 'react';
import { ResumeContext } from './context'; 

import {
  bioData,
  contactInfoData,
  educationData,
  workExperienceData,
  skillsData,
  personalInterestsData,
  referencesData,
  languagesData,
  } from '../data'; 

const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextValue = {
    bioData,
    contactInfoData,
    educationData,
    workExperienceData,
    skillsData,
    personalInterestsData,
    referencesData,
    languagesData,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
