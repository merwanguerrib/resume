import React from 'react';
import ReactDOM from 'react-dom/client';
import { Resume } from './components/Resume/Resume';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ContactInfo } from './components/Resume/ContactInfo/ContactInfo';
import { contactInfoData } from './data/contact-info-data';
import { Bio } from './components/Resume/Bio/Bio';
import { bioData } from './data/bio-data';
import { Education } from './components/Resume/Education/Education';
import { educationData } from './data/education-data';
import { WorkExperiences } from './components/Resume/WorkExperiences/WorkExperiences';
import { workExperienceData } from './data/work-experience-data';
import { Skills } from './components/Resume/Skills/Skills';
import { skillsData } from './data/skills-data';
import { PersonalInterests } from './components/Resume/PersonalInterests/PersonalInterests';
import { personalInterestsData } from './data/personal-interests-data';
import { References } from './components/Resume/References/References';
import { referencesData } from './data/references-data';
import { Languages } from './components/Resume/Languages/Languages';
import { languagesData } from './data/languages-data';
import { Entertainment } from './components/Resume/Entertainment/Entertainment';
import { entertainmentData } from './data/entertainment-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return (
    <React.StrictMode>
      <Resume>
        <ContactInfo data={contactInfoData} />
        <Bio data={bioData} />
        <Education data={educationData} />
        <WorkExperiences data={workExperienceData} />
        <Skills data={skillsData} />
        <PersonalInterests data={personalInterestsData} />
        <References data={referencesData} />
        <Languages data={languagesData} />
        <Entertainment data={entertainmentData} />
      </Resume>
    </React.StrictMode>
  );
}

root.render(<App />);

reportWebVitals();
