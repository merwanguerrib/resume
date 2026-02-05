import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ResumeProvider from './context/ResumeProvider';

import './index.css';
import reportWebVitals from './reportWebVitals';

import { Bio } from './components/Resume/Bio/Bio';

// import { Navigation } from './components/Layout/Navigation';
import SideBar from './components/Layout/SideBar';
import { SchemaMarkup } from './Schema';
import DynamicFavicon from './components/Layout/DynamicFavicon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return (
    <React.StrictMode>
      <DynamicFavicon />
      <SchemaMarkup />
      <BrowserRouter>
        <ResumeProvider>
          <main className="min-h-screen bg-hero">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
              <div className="grid gap-6 lg:grid-cols-3">
                <SideBar />
                <div className="space-y-6 lg:col-span-2">
                  <div className="hidden rounded-3xl border border-line/80 bg-surface/90 p-6 shadow-soft backdrop-blur transition duration-300 motion-safe:animate-fade-up motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-glow lg:block">
                    <Bio />
                    {/* <Navigation /> */}
                  </div>
                  <AppRoutes />
                </div>
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
