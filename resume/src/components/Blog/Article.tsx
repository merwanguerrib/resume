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
  const { title, publishedAt, image, category, content } =
    data.articles.data[0]?.attributes ?? {};
  const imageUrl = `${process.env.REACT_APP_STRAPI_APP_URL}${image.data.attributes.url}`;
  const imageAlt = image.data.attributes.alternativeText;
  const categoryName = category?.data.attributes.name;
  if (!article) return <NotFoundPage />;

  return (
    <article className="overflow-hidden rounded-3xl border border-line/80 bg-surface/90 shadow-soft">
      <div className="h-64 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-6 p-6 sm:p-7">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-lg font-semibold text-ink">{title}</h1>
            {category ? (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {categoryName}
              </span>
            ) : null}
          </div>
          <p>
            <time dateTime={publishedAt} className="text-xs uppercase text-muted">
              {new Date(publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </p>
        </div>
        <Markdown className="text-sm leading-relaxed text-ink">
          {content}
        </Markdown>
      </div>
    </article>
  );
};
