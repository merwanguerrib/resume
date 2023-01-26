import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ResumeContext } from '../../context';

export const Article: React.FC = () => {
  const { slug } = useParams();
  const context = useContext(ResumeContext);
  const data = context.articleData;
  const article = data.articles.find((article: any) => article.slug === slug);

  return (
    <article className="single-article-section">
      <div className="single-article-img rounded-t-xl">
        <img src={article.image} />
      </div>
      <div className="space-y-7 mb-5 p-7 pb-0">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">{article.h1}</h1>
          <p><time dateTime={article.date} className="text-sm text-gray-400">{article.date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })}</time></p>
        </div>
        {article.parts.map((part: any, index: any) => {
          return (
            <>
              <h2 className="text-lg font-semibold" >{part.h2}</h2>
              <p className="text-gray-600">{part.p}</p>
            </>
          )
        })}
      </div>
    </article>
  )
}