// a Language component that display a language and its level in accordance with the LanguageInterface interface.

import React, { useContext } from 'react';
import { ResumeContext } from "../../../context";

export const Languages: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.languagesData;
  return (
    <div className="p-7 block-section flow-root">
      <h2 className="block-title">Languages</h2>
      <div className="-m-2 flex flex-wrap"></div>
      {data.list.map((language, index) => (
        <p>{`${language.emoji} ${language.name} - ${language.level}`}</p>
      ))}
    </div>
  );
};
