export interface ResumeInterface {
  contactInfo?: ContactInfoInterface;
  bio?: BioInterface;
  education?: EducationListInterface;
  workExperiences?: WorkExperienceListInterface;
  skills?: SkillListInterface;
  personalInterests?: PersonalInterestsListInterface;
  references?: ReferenceListInterface;
  languages?: LanguageListInterface;
  entertainment?: EntertainmentInterface;
}

export interface ContactInfoInterface {
    firstName: string;
    lastName: string;
    email: string;
    address: {
      street?: string;
      city: string;
      zip?: string;
    };
}

export interface BioInterface {
  catchPhrase?: string;
  bio?: string;
  qualities?: string[];
}

export interface EducationInterface {
  school: string;
  degree: string;
  specialization: string;
  city: string;
  date: string;
}

export interface EducationListInterface {
  list: EducationInterface[];
}

export interface ProjectInterface {
  description: string;
  technos: string;
}

export interface WorkExperienceInterface {
  company: string;
  position: string;
  description?: string;
  city: string;
  projects?: ProjectInterface[];
  startDate: string;
  endDate?: string;
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
  relationship: string;
  linkedin: string;
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
  name: string;
  level: number;
}

export interface LanguageListInterface {
  list: LanguageInterface[];
}

export interface MovieInterface {
  title: string;
  thumbnail?: string;
  description?: string;
  rating?: number;
  cast?: string[];
}

export interface SongInterface {
  title: string;
  videoclip?: string;
  album?: string;
  rating: number;
  artist: string;
}

export interface BookInterface {
  title: string;
  author: string;
  rating: number;
  preview?: string;
}

export interface EntertainmentInterface {
  favoriteMovies: MovieInterface[];
  favoriteSongs: SongInterface[];
  favoriteBooks: BookInterface[];
}

