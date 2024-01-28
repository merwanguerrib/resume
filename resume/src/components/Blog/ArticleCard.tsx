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
    <div className="ArticleCard mt-2 mb-2">
      <article className="article-section">
        <div className="space-y-3 mb-5 p-7 pb-0">
          <div className="flex justify-between">
            <Link
              to={`/blog/article/${slug}`}
              className="article-title-hover block"
              key={article.id}
            >
              <h2 className="text-lg font-semibold">{title}</h2>
            </Link>
            {category ? (
              <div className="space-y-2 sm:text-right">
                <div className="job-item-badge">{categoryName}</div>
              </div>
            ) : null}
          </div>
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
    </div>
  );
};

export default ArticleCard;
