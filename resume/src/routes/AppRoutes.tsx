// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Blog } from '../components/Blog/Blog';
import { Article } from '../components/Blog/Article';
import { Resume } from '../components/Resume/Resume';
// Import other components as needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/resume" />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/article/:slug" element={<Article />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;
