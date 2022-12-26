import {
  ContactInfoInterface,
  BioInterface,
  SkillListInterface,
  PersonalInterestsListInterface,
  ReferenceListInterface,
  LanguageListInterface,
  EntertainmentInterface,
  EducationListInterface,
  WorkExperienceListInterface,
} from '../interfaces';
import { Bio } from './Bio';
import { ContactInfo } from './ContactInfo';
import { Education } from './Education';
import { Entertainment } from './Entertainment';
import { Languages } from './Languages';
import { PersonalInterests } from './PersonalInterests';
import { References } from './References';
import { Skills } from './Skills';
import { WorkExperiences } from './WorkExperiences';

interface Props {
  data: {
    contactInfo?: ContactInfoInterface;
    bio?: BioInterface;
    education?: EducationListInterface;
    workExperiences?: WorkExperienceListInterface;
    skills?: SkillListInterface;
    interests?: PersonalInterestsListInterface;
    references?: ReferenceListInterface;
    languages?: LanguageListInterface;
    entertainment?: EntertainmentInterface;
  }
}
export const Resume: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <>
      {data.contactInfo && <ContactInfo data={data.contactInfo} />}
      {data.bio && <Bio data={data.bio} />}
      {data.education && <Education data={data.education} />}
      {data.workExperiences && <WorkExperiences data={data.workExperiences} />}
      {data.skills && <Skills data={data.skills} />}
      {data.interests && <PersonalInterests data={data.interests} />}
      {data.references && <References data={data.references} />}
      {data.languages && <Languages data={data.languages} />}
      {data.entertainment && <Entertainment data={data.entertainment} />}
    </>

  );
}


