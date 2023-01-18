import React, { useContext, useState } from 'react'
import { ResumeContext } from '../../context';
import { Link } from 'react-router-dom';

export const Preview: React.FC = () => {
  const context = useContext(ResumeContext);
  const data = context.articleData;
  return (
    data.articles.map((article: any) => {
      return (
        <Link to={`/blog/article/${article.slug}`} className="article-title-hover block">
          <article className="article-section">
            <div className="space-y-3 mb-5 p-7 pb-0">
              <h1 className="text-lg font-semibold">{article.h1}</h1>
              <p className="text-gray-600">{article.preview}</p>
              <p><time dateTime={article.date} className="text-sm text-gray-400">{article.date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</time></p>
            </div>
            <div className="article-img">
              <img src={article.image} />
            </div>
          </article>
        </Link>
      )
    })
  )
}