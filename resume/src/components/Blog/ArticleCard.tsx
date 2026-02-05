import React from 'react';
import { ArticleInterface } from './Article';
import { Link } from 'react-router-dom';

const ArticleCard: React.FC<{ article: ArticleInterface }> = ({ article }) => {
  const { slug, title, description, publishedAt, image, category } =
    article.attributes;
  const imageUrl = `${process.env.REACT_APP_STRAPI_APP_URL}${image.data.attributes.url}`;
  const imageAlt = image.data.attributes.alternativeText;
  const categoryName = category?.data.attributes.name;

  return (
    <article className="mt-2 overflow-hidden rounded-3xl border border-line/80 bg-surface/90 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-glow">
      <div className="space-y-3 p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/blog/article/${slug}`}
            className="block text-lg font-semibold text-ink transition duration-300 hover:text-primary"
            key={article.id}
          >
            {title}
          </Link>
          {category ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {categoryName}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-muted">{description}</p>
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
      <div className="h-56 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  );
};

export default ArticleCard;
