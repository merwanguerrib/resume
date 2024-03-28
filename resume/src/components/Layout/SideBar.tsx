import React from 'react';
import { ContactInfo } from '../Resume/ContactInfo/ContactInfo';
import { Skills } from '../Resume/Skills/Skills';
import { Languages } from '../Resume/Languages/Languages';
import { PersonalInterests } from '../Resume/PersonalInterests/PersonalInterests';
import { Bio } from '../Resume/Bio/Bio';
import { Navigation } from './Navigation';

const SideBar = () => {
  return (
    <div className="Sidebar space-y-5 ">
      <ContactInfo />
      <div className="BIO_NAV_SIDEBAR p-7 pb-0 block-section lg:hidden sm:block">
        <Bio />
        <Navigation />
      </div>
      <Skills />
      <Languages />
      <PersonalInterests />
    </div>
  );
};

export default SideBar;
