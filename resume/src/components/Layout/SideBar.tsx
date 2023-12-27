import React from 'react';
import { ContactInfo } from '../Resume/ContactInfo/ContactInfo';
import { Skills } from '../Resume/Skills/Skills';
import { Languages } from '../Resume/Languages/Languages';
import { PersonalInterests } from '../Resume/PersonalInterests/PersonalInterests';

const SideBar = () => {
  return (
    <div className="Sidebar space-y-5">
      <ContactInfo />
      <Skills />
      <Languages />
      <PersonalInterests />
    </div>
  );
};

export default SideBar;
