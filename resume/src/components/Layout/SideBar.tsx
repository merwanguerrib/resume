import React from 'react';
import { ContactInfo } from '../Resume/ContactInfo/ContactInfo';
import { Skills } from '../Resume/Skills/Skills';
import { Languages } from '../Resume/Languages/Languages';
import { PersonalInterests } from '../Resume/PersonalInterests/PersonalInterests';
import { Bio } from '../Resume/Bio/Bio';
// import { Navigation } from './Navigation';

const SideBar = () => {
  return (
    <div className="space-y-6">
      <ContactInfo />
      <div className="rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow lg:hidden">
        <Bio />
        {/* <Navigation /> */}
      </div>
      <Skills />
      <Languages />
      <PersonalInterests />
    </div>
  );
};

export default SideBar;
