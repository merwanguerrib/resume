import { createContext } from "react";
import {
  BioInterface,
  ContactInfoInterface,
  EducationListInterface,
  EntertainmentInterface,
  LanguageListInterface,
  PersonalInterestsListInterface,
  ReferenceListInterface,
  SkillListInterface,
  WorkExperienceListInterface,
} from "./interfaces";

interface ResumeContextInterface {
  bioData: BioInterface;
  contactInfoData: ContactInfoInterface;
  educationData: EducationListInterface;
  workExperienceData: WorkExperienceListInterface;
  skillsData: SkillListInterface;
  personalInterestsData: PersonalInterestsListInterface;
  referencesData: ReferenceListInterface;
  languagesData: LanguageListInterface;
  entertainmentData: EntertainmentInterface;
}
// Create a context component
export const ResumeContext = createContext<ResumeContextInterface>({} as ResumeContextInterface);
