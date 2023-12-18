import React, { useContext } from 'react';
import { ResumeContext } from '../../../context';
import { PopupButton } from "react-calendly"

export const ContactInfo: React.FC = () => {
  const rootElement = document.getElementById("root");
  const context = useContext(ResumeContext)
  const data = context.contactInfoData

  return (
    <div className="shadow rounded-xl overflow-hidden">
      <div className="h-32 bg-cover" style={{ backgroundImage: `url('https://res.cloudinary.com/mrwn211/image/upload/v1689841866/Blue_Modern_Lets_Do_This_LinkedIn_Banner.png')` }}></div>
      <div className="pt-14 p-7 bg-white relative">
        <span className="status-badge bg-gray-400">Free</span>
        <img src="https://res.cloudinary.com/mrwn211/image/upload/v1689842298/merwan-guerrib.jpg" alt="Merwan Guerrib" className="user-photo" />
        <div className="text-lg font-semibold mb-1.5">{data.firstName} {data.lastName}</div>
        <div className="text-sm text-gray-400 mb-7">{data.title}</div>
        <div className="flex flex-col space-y-2">
          <a href="https://drive.google.com/file/d/1woWGpXj7xbE3uxW0TJuxpNPww7dr3Ete/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
            <div className="flex">
              <button className="download-btn">Download CV</button>
              <button className="download-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></button>
            </div>
          </a>
          <div className="flex">
            {rootElement ?
              <>

                <PopupButton
                  url="https://calendly.com/merwanguerrib/let-s-connect"
                  rootElement={rootElement}
                  text="Let's connect !"
                  className="download-btn" />

                <button className="download-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
                </button>
              </>
              : null}
          </div>
        </div>

      </div>
    </div>
  );
};


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
