// a Language component that display a language and its level in accordance with the LanguageInterface interface.

import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Languages: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.languagesData;
  return (
    <section className="rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-ink">Languages</h2>
      <div className="flex flex-wrap gap-3">
        {data.list.map((language, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-panel/50 px-3 py-1 text-xs font-medium text-ink"
          >
            <span>{language.emoji}</span>
            <span>{`${language.name} · ${language.level}`}</span>
          </span>
        ))}
      </div>
    </section>
  );
};
