import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Resume } from "./components/Resume/Resume";
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
import { Blog } from "./components/Blog/Blog";

import { ResumeContext } from "./context";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(true);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isEntertainmentOpen, setIsEntertainmentOpen] = useState(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
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

              <div className="space-y-5">
                <ContactInfo />
                <Skills />
                <Languages />
                <PersonalInterests />
              </div>
              <div className="space-y-5 lg:col-span-2">
                <div className="p-7 pb-0 block-section">
                  <Bio />
                  <ul className="flex space-x-8 font-medium">
                    <li>
                      <Link to="/resume" className={`menu-link ${isResumeOpen ? 'menu-link-active' : ''} menu-link-hover`} onClick={() => {
                        setIsResumeOpen(true);
                        setIsBlogOpen(false);
                        setIsEntertainmentOpen(false);
                      }}>Resume</Link>
                    </li>
                    <li>
                      <Link to="/entertainment" className={`menu-link ${isEntertainmentOpen ? 'menu-link-active' : ''} menu-link-hover`} onClick={() => {
                        setIsResumeOpen(false);
                        setIsBlogOpen(false);
                        setIsEntertainmentOpen(true);
                      }}>Entertainment</Link>
                    </li>
                    <li>
                      <Link to="/blog" className={`menu-link ${isBlogOpen ? 'menu-link-active' : ''} menu-link-hover`} onClick={() => {
                        setIsResumeOpen(false);
                        setIsBlogOpen(true);
                        setIsEntertainmentOpen(false);
                      }}>Blog</Link>
                    </li>
                  </ul>
                </div>
                {isResumeOpen && (
                  <Resume>
                    <WorkExperiences />
                    <Education />
                  </Resume>
                )}
                {isBlogOpen && <Blog />}
                {isEntertainmentOpen && <Entertainment />}
              </div>

            </div>
          </main>
        </ResumeContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(<App />);

reportWebVitals();
