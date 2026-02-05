import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';

export const Bio: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.bioData;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-ink">About me</h2>
        <p className="text-sm font-medium text-muted">{data.catchPhrase}</p>
      </div>
      <p className="text-sm leading-relaxed text-ink/90">{data.bio}</p>
      <div className="flex flex-col gap-4">
        {data.qualities && (
          <ul className="flex flex-wrap gap-3 text-sm font-medium text-primary">
            {data.qualities.map((quality, index) => (
              <li
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1"
                key={index}
              >
                {quality}
              </li>
            ))}
          </ul>
        )}
        <ul className="flex flex-wrap gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/merwanguerrib/"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line/80 bg-surface text-primary transition duration-300 hover:border-primary/40 hover:text-primary-dark"
            >
              <i className="bx bxl-linkedin-square text-2xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/mrwn211"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line/80 bg-surface text-primary transition duration-300 hover:border-primary/40 hover:text-primary-dark"
            >
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/merwanguerrib"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line/80 bg-surface text-primary transition duration-300 hover:border-primary/40 hover:text-primary-dark"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
          </li>
          <li>
            <span className="inline-flex items-center rounded-full border border-line/80 bg-panel/40 px-4 py-2 text-xs font-medium text-muted">
              merwanguerrib@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <div className="border-t border-line/80"></div>
    </div>
  );
};
