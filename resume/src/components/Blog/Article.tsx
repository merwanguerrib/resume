import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTICLE_BY_SLUG_QUERY } from '../../utils/apolloClient';
import Loader from '../Layout/Loader';
import NotFoundPage from '../Layout/NotFound';
import Markdown from 'react-markdown';

export interface ArticleInterface {
  id: string;
  attributes: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    category?: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_SLUG_QUERY, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const article = data.articles.data[0]?.attributes;
  const { title, description, publishedAt, image, category, content } =
    data.articles.data[0]?.attributes;
  const imageUrl = `${process.env.REACT_APP_STRAPI_APP_URL}${image.data.attributes.url}`;
  const imageAlt = image.data.attributes.alternativeText;
  const categoryName = category?.data.attributes.name;
  if (!article) return <NotFoundPage />;

  return (
    <article className="Article single-article-section">
      <div className="single-article-img rounded-t-xl">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="space-y-7 mb-5 p-7 pb-0">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">{title}</h1>
            {category ? (
              <div className="space-y-2 sm:text-right">
                <div className="job-item-badge">{categoryName}</div>
              </div>
            ) : null}
          </div>
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
        <Markdown className="markdown-body" children={content} />
      </div>
    </article>
  );
};
