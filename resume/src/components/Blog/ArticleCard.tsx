import React from 'react';
import { ArticleStory } from '../../storyblok/types';
import { Link } from 'react-router-dom';

const ArticleCard: React.FC<{ article: ArticleStory }> = ({ article }) => {
  const { Title, Description, image, Category } = article.content;
  const imageUrl = image?.filename;
  const imageAlt = image?.alt || Title;
  const categoryName = Category?.[0];

  // Extract just the slug part from the full_slug
  const slug = article.full_slug.replace('blog/', '');

  console.log('ArticleCard - article data:', {
    full_slug: article.full_slug,
    extracted_slug: slug,
    name: article.name,
    uuid: article.uuid,
    title: Title
  });

  return (
    <div className="ArticleCard mt-2 mb-2">
      <article className="article-section">
        <div className="space-y-3 mb-5 p-7 pb-0">
          <div className="flex justify-between">
            <Link
              to={`/blog/article/${slug}`}
              className="article-title-hover block"
              key={article.uuid}
            >
              <h2 className="text-lg font-semibold">{Title}</h2>
            </Link>
            {categoryName && (
              <div className="space-y-2 sm:text-right">
                <div className="job-item-badge">{categoryName}</div>
              </div>
            )}
          </div>
          <p className="text-gray-600">{Description}</p>
          {article.published_at && (
            <p>
              <time dateTime={article.published_at} className="text-sm text-gray-400">
                {new Date(article.published_at).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </p>
          )}
        </div>
        {imageUrl && (
          <div className="article-img">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        )}
      </article>
    </div>
  );
};

export default ArticleCard;
