import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const PersonalInterests: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.personalInterestsData;
  return (
    <section className="rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-ink">
        Personal Interests
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {data.list.map((interest, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-2xl border border-line/80 bg-panel/40 px-4 py-3 text-sm font-medium text-ink"
          >
            <span className="text-lg">{interest.emoji}</span>
            <span>{interest.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
