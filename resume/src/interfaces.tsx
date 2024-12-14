export interface ResumeInterface {
  contactInfo?: ContactInfoInterface;
  education?: EducationListInterface;
  workExperiences?: WorkExperienceListInterface;
  skills?: SkillListInterface;
  personalInterests?: PersonalInterestsListInterface;
  references?: ReferenceListInterface;
  languages?: LanguageListInterface;
}

export interface ContactInfoInterface {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  address: {
    street?: string;
    city: string;
    zip?: string;
  };
}

export interface EducationInterface {
  school: string;
  degree: string;
  specialization: string;
  city: string;
  date: string;
  logo?: string;
}

export interface EducationListInterface {
  list: EducationInterface[];
}

export interface ProjectInterface {
  description: string[];
  technos: string[];
}

export interface WorkExperienceInterface {
  company: string;
  logo?: string;
  position: string;
  description?: string;
  city: string;
  projects?: ProjectInterface[];
  startDate: Date
  endDate?: Date;
}

export interface WorkExperienceListInterface {
  list: WorkExperienceInterface[];
}

export interface SkillInterface {
  name: string;
  level: number;
}
export interface SkillListInterface {
  list: SkillInterface[];
}

export interface ReferenceInterface {
  name: {
    firstName: string;
    lastName: string;
  };
  company: string;
  position: string;
  relationship?: string;
  linkedin?: string;
  review?: string;
  email?: string;
}

export interface ReferenceListInterface {
  list: ReferenceInterface[];
}

export interface PersonalInterestInterface {
  name: string;
  emoji?: string;
}

export interface PersonalInterestsListInterface {
  list: PersonalInterestInterface[];
}

export interface LanguageInterface {
  emoji: string;
  name: string;
  level?: string;
}

export interface LanguageListInterface {
  list: LanguageInterface[];
}


