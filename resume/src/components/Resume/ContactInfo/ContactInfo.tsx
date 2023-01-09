import React, { useContext } from 'react';
import { ResumeContext } from '../../../context';

export const ContactInfo: React.FC = () => {
  const context = useContext(ResumeContext)
  const data = context.contactInfoData
  return (
    <div className="shadow rounded-xl overflow-hidden">
      <div className="h-32 bg-cover" style={{ backgroundImage: `url('https://res.cloudinary.com/mrwn211/image/upload/v1673129209/cover.jpg')` }}></div>
      <div className="pt-14 p-7 bg-white relative">
        <span className="status-badge bg-gray-400">Free</span>
        <img src="https://res.cloudinary.com/mrwn211/image/upload/v1672054971/ProfilePictureMerwan.jpg" alt="Merwan Guerrib" className="user-photo" />
        <div className="text-lg font-semibold mb-1.5">{data.firstName} {data.lastName}</div>
        <div className="text-sm text-gray-400 mb-7">{data.title}</div>
        <div className="flex group">
          <button className="download-btn">Download CV</button>
          <button className="download-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg></button>
        </div>
      </div>
    </div>
  );
};
