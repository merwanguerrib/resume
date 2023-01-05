import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Resume } from './components/Resume/Resume';
import './index.css';
import data from './data/resume-data'
import reportWebVitals from './reportWebVitals';
import { ResumeInterface } from './interfaces';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


function App() {
  const [resumeData, setResumeData] = useState<ResumeInterface>(data);
  useEffect(() => setResumeData(data), [resumeData]);
  return (
    <React.StrictMode>
      {resumeData ? <Resume data={resumeData} /> : <div>Loading...</div>}
    </React.StrictMode>
  );
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
