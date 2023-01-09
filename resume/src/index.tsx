import React from "react";
import ReactDOM from "react-dom/client";
import { Resume } from "./components/Resume/Resume";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ContactInfo } from "./components/Resume/ContactInfo/ContactInfo";
import { contactInfoData } from "./data/contact-info-data";
import { Bio } from "./components/Resume/Bio/Bio";
import { bioData } from "./data/bio-data";
import { Education } from "./components/Resume/Education/Education";
import { educationData } from "./data/education-data";
import { WorkExperiences } from "./components/Resume/WorkExperiences/WorkExperiences";
import { workExperienceData } from "./data/work-experience-data";
import { Skills } from "./components/Resume/Skills/Skills";
import { skillsData } from "./data/skills-data";
import { PersonalInterests } from "./components/Resume/PersonalInterests/PersonalInterests";
import { personalInterestsData } from "./data/personal-interests-data";
import { References } from "./components/Resume/References/References";
import { referencesData } from "./data/references-data";
import { Languages } from "./components/Resume/Languages/Languages";
import { languagesData } from "./data/languages-data";
import { Entertainment } from "./components/Resume/Entertainment/Entertainment";
import { entertainmentData } from "./data/entertainment-data";
import { ResumeContext } from "./context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function App() {
  return (
    <React.StrictMode>
      <ResumeContext.Provider
        value={{
          bioData,
          contactInfoData,
          educationData,
          workExperienceData,
          skillsData,
          personalInterestsData,
          referencesData,
          languagesData,
          entertainmentData,
        }}
      >
        <main className="main-container">
          <div className="grid gap-5 lg:grid-cols-3">
            <Resume>
              <div className="space-y-5">
                <ContactInfo />
                <Skills />
                <Languages />
              </div>
              <div className="space-y-5 lg:col-span-2">
                <Bio />
                <WorkExperiences />
                <Education />
              </div>
              {/* <References data={referencesData} /> */}
              {/* <PersonalInterests data={personalInterestsData} /> */}
              {/* <Entertainment data={entertainmentData} /> */}
            </Resume>
          </div>
        </main>
      </ResumeContext.Provider>
    </React.StrictMode>
  );
}

root.render(<App />);

reportWebVitals();
