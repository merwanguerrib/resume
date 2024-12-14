import { createContext } from 'react';
import {
  ContactInfoInterface,
  EducationListInterface,
  LanguageListInterface,
  PersonalInterestsListInterface,
  ReferenceListInterface,
  SkillListInterface,
  WorkExperienceListInterface,
} from '../interfaces';

export interface ResumeContextInterface {
  contactInfoData: ContactInfoInterface;
  educationData: EducationListInterface;
  workExperienceData: WorkExperienceListInterface;
  skillsData: SkillListInterface;
  personalInterestsData: PersonalInterestsListInterface;
  referencesData: ReferenceListInterface;
  languagesData: LanguageListInterface;
}
export const ResumeContext = createContext<ResumeContextInterface>(
  {} as ResumeContextInterface
);
