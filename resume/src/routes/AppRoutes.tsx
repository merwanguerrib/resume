// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Article } from '../components/Blog/Article';
import { Resume } from '../components/Resume/Resume';
import { BlogHome } from '../components/Blog/BlogHome';
import NotFoundPage from '../components/Layout/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Navigate to="/resume" />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/blog/article/:slug" element={<Article />} />
    </Routes>
  );
};

export default AppRoutes;
