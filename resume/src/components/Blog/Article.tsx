import React from 'react';
import { useParams } from 'react-router-dom';
import { useStoryblokApi } from "@storyblok/react";
import Loader from '../Layout/Loader';
import NotFoundPage from '../Layout/NotFound';
import Markdown from 'react-markdown';

export interface StoryblokArticle {
  content: {
    Title: string;
    Content: string;
    Description: string;
    Category: string[];
    image: {
      id: null;
      alt: string | null;
      name: string;
      focus: null;
      title: string | null;
      source: null;
      filename: string;
      copyright: null;
      fieldtype: string;
      meta_data: Record<string, unknown>;
    };
    component: 'article';
    _uid: string;
    _editable?: string;
  };
  name: string;
  full_slug: string;
  slug: string;
  published_at?: string;
  uuid: string;
}

export const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const storyblokApi = useStoryblokApi();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [article, setArticle] = React.useState<StoryblokArticle | null>(null);

  console.log('Article - received slug from params:', slug);

  React.useEffect(() => {
    const getArticle = async () => {
      try {
        console.log('Article - fetching story with path:', `blog/${slug}`);
        const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
          version: 'draft'
        });
        console.log('Article - received data:', data);
        setArticle(data.story);
        setLoading(false);
      } catch (err) {
        console.error('Article - error fetching story:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch article'));
        setLoading(false);
      }
    };

    if (slug) {
      getArticle();
    }
  }, [slug, storyblokApi]);

  if (loading) return <Loader />;
  if (error || !article) return <NotFoundPage />;

  const { Title, Content, image, Category } = article.content;

  return (
    <article className="Article single-article-section">
      {image && image.filename && (
        <div className="single-article-img rounded-t-xl">
          <img src={image.filename} alt={image.alt || Title} />
        </div>
      )}
      <div className="space-y-7 mb-5 p-7 pb-0">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">{Title}</h1>
            {Category && Category.length > 0 && (
              <div className="space-y-2 sm:text-right">
                <div className="job-item-badge">{Category[0]}</div>
              </div>
            )}
          </div>
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
        <div className="markdown-body">
          <Markdown>{Content}</Markdown>
        </div>
      </div>
    </article>
  );
};

export default Article;
