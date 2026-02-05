import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Skills: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.skillsData;
  return (
    <section className="rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-8">
      <h2 className="mb-6 text-lg font-semibold text-ink">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {data.list.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary transition duration-300 hover:bg-primary/20"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};
