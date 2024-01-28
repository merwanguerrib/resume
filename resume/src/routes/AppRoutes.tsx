// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Article } from '../components/Blog/Article';
import { Resume } from '../components/Resume/Resume';
import { BlogHome } from '../components/Blog/BlogHome';
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/apolloClient';
import NotFoundPage from '../components/Layout/NotFound';
// Import other components as needed

const AppRoutes = () => {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/resume" />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/article/:slug" element={<Article />} />
        {/* Add other routes here */}
      </Routes>
    </ApolloProvider>
  );
};

export default AppRoutes;
