import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/context';
import { PopupButton } from 'react-calendly';

export const ContactInfo: React.FC = () => {
  const rootElement = document.getElementById('root');
  const context = useContext(ResumeContext);
  const data = context.contactInfoData;

  return (
    <section className="overflow-hidden rounded-3xl border border-line/80 bg-surface/90 shadow-glow backdrop-blur">
      <div className="relative h-32 bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/mrwn211/image/upload/v1689841866/Blue_Modern_Lets_Do_This_LinkedIn_Banner.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/10 to-transparent"></div>
      </div>
      <div className="relative space-y-5 p-6 pt-14 sm:p-7">
        <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
          <span className="h-2 w-2 rounded-full bg-success"></span>
          Available
        </span>
        <img
          src="https://res.cloudinary.com/mrwn211/image/upload/v1689842298/merwan-guerrib.jpg"
          alt="Merwan Guerrib"
          className="absolute left-6 top-0 h-16 w-16 -translate-y-1/2 rounded-2xl border-2 border-surface object-cover shadow-soft ring-1 ring-primary/20 motion-safe:animate-float sm:left-7"
        />
        <div>
          <div className="text-lg font-semibold text-ink">
            {data.firstName} {data.lastName}
          </div>
          <div className="text-sm text-muted">{data.title}</div>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="https://drive.google.com/file/d/1o2J2muY8X_8THfziatZQ-sgBQFQBUU9Y/view"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition duration-300 hover:bg-primary/20"
          >
            Download CV
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary transition duration-300 group-hover:translate-x-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </span>
          </a>
          <div className="flex flex-col gap-3 sm:flex-row">
            {rootElement ? (
              <>
                <PopupButton
                  url="https://calendly.com/merwanguerrib/let-s-connect"
                  rootElement={rootElement}
                  text="Let's connect !"
                  className="inline-flex flex-1 items-center justify-between gap-3 rounded-2xl border border-line/80 bg-surface px-4 py-3 text-sm font-semibold text-ink transition duration-300 hover:border-primary/30"
                />
                <button className="inline-flex h-12 items-center justify-center rounded-2xl border border-line/80 bg-surface px-4 text-primary transition duration-300 hover:border-primary/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
