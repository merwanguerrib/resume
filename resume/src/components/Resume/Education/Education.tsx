import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Education: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.educationData;
  return (
    <section className="rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">Education</h2>
        <span className="text-xs uppercase tracking-widest text-muted">
          Learning
        </span>
      </div>
      <div className="space-y-6">
        {data.list.map((education, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-2xl border border-transparent p-4 transition duration-300 hover:border-primary/20 hover:bg-panel/40 sm:flex-row sm:items-start"
          >
            <div
              className="h-12 w-12 flex-shrink-0 rounded-2xl bg-cover bg-center shadow-soft ring-1 ring-primary/10"
              style={{ backgroundImage: `url(${education.logo})` }}
            ></div>
            <div className="w-full space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="text-base font-semibold text-ink">
                    {education.degree} - {education.specialization}
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
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                      <span>{education.school}</span>
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
                      <span>{education.city}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <div className="flex items-center gap-2 sm:justify-end">
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
                    <span>{education.date}</span>
                  </div>
                </div>
              </div>
              <div className="border-b border-line/80"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
