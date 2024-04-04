import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ResumeProvider from './context/ResumeProvider';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { Bio } from './components/Resume/Bio/Bio';

import { Navigation } from './components/Layout/Navigation';
import SideBar from './components/Layout/SideBar';
import { SchemaMarkup } from './Schema';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return (
    <React.StrictMode>
      <SchemaMarkup />
      <BrowserRouter>
        <ResumeProvider>
          <main className="main-container">
            <div className="grid gap-5 lg:grid-cols-3 ">
              <SideBar />
              <div className="space-y-5 lg:col-span-2">
                <div className="BIO_NAV p-7 pb-0 block-section lg:block hidden">
                  <Bio />
                  {/* <Navigation /> */}
                </div>
                <AppRoutes />
              </div>
            </div>
          </main>
        </ResumeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(<App />);

reportWebVitals();
