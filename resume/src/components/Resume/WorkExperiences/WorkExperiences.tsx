import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const WorkExperiences: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.workExperienceData;
  return (
    <section className="rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">Work Experience</h2>
        <span className="text-xs uppercase tracking-widest text-muted">
          2026-ready
        </span>
      </div>
      <div className="space-y-6">
        {data.list.map((experience, index) => (
          <div
            className="group flex flex-col gap-4 rounded-2xl border border-transparent p-4 transition duration-300 hover:border-primary/20 hover:bg-panel/40 sm:flex-row sm:items-start"
            key={index}
          >
            <div
              className="h-12 w-12 flex-shrink-0 rounded-2xl bg-cover bg-center shadow-soft ring-1 ring-primary/10"
              style={{ backgroundImage: `url(${experience.logo})` }}
            ></div>
            <div className="w-full space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="text-base font-semibold text-ink">
                    {experience.position}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      <span>{experience.city}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm sm:text-right">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Full time
                  </div>
                  <div className="flex items-center gap-2 text-muted sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>
                      {experience.startDate.toLocaleDateString()} –
                      {experience.endDate
                        ? experience.endDate.toLocaleDateString()
                        : 'Present'}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {experience.description}
              </p>
              {experience.projects && (
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                  {experience.projects.map((project) => {
                    return project.description.map((description) => (
                      <li key={description}>{description}</li>
                    ));
                  })}
                </ul>
              )}
              <div className="border-b border-line/80"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
