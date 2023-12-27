// src/context/ResumeProvider.tsx (or your chosen location)
import React from 'react';
import { ResumeContext } from './context'; // Adjust this import path as needed
// Import your data here (adjust the paths as necessary)
import {
  bioData,
  contactInfoData,
  educationData,
  workExperienceData,
  skillsData,
  personalInterestsData,
  referencesData,
  languagesData,
  } from '../data'; // Adjust this import path as needed

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
