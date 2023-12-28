import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES_QUERY } from '../../utils/apolloClient';
import { ArticleInterface } from './Article';
import Loader from '../Layout/Loader';

export const Preview: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES_QUERY);
  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;
  
  return data.articles.data.map((article: ArticleInterface) => {
    const { slug, title, description, publishedAt, image } = article.attributes;
    const imageUrl = `${process.env.REACT_APP_STRAPI_APP_URL}${image.data.attributes.url}`;
    const imageAlt = image.data.attributes.alternativeText;

    return (
      <div className="Preview">
        <Link
          to={`/blog/article/${slug}`}
          className="article-title-hover block"
          key={article.id}
        >
          <article className="article-section">
            <div className="space-y-3 mb-5 p-7 pb-0">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-gray-600">{description}</p>
              <p>
                <time dateTime={publishedAt} className="text-sm text-gray-400">
                  {new Date(publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </p>
            </div>
            <div className="article-img">
              <img src={imageUrl} alt={imageAlt} />
            </div>
          </article>
        </Link>
      </div>
    );
  });
};
