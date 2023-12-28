// a Language component that display a language and its level in accordance with the LanguageInterface interface.

import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Languages: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.languagesData;
  return (
    <div className="Languages p-7 block-section flow-root">
      <h2 className="block-title">Languages</h2>
      <div className="-m-2 flex flex-wrap">
        {data.list.map((language, index) => (
          <p
            key={index}
          >{`${language.emoji} ${language.name} - ${language.level}`}</p>
        ))}
      </div>
    </div>
  );
};
