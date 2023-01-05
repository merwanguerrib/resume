// a Language component that display a language and its level in accordance with the LanguageInterface interface.

import React from 'react';
import { LanguageListInterface } from '../../interfaces';

interface Props {
  data: LanguageListInterface;
}

export const Languages: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <div>
      <h2>Languages</h2>
      {data.list.map((language, index) => (
        <div key={index}>
          <h3>{language.name}</h3>
          <p>Level: {language.level}</p>
        </div>
      ))}
    </div>
  );
};