import React, { useState, useEffect, useRef } from 'react';
import { useStoryblokApi } from "@storyblok/react";
import { ArticleStory } from '../../storyblok/types';
import Loader from '../Layout/Loader';
import FilterButton from '../Layout/FilterButton';
import DropDown from '../Layout/DropDown';
import ArticleCard from './ArticleCard';

export const BlogHome: React.FC = () => {
  const storyblokApi = useStoryblokApi();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [articles, setArticles] = useState<ArticleStory[]>([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        console.log('BlogHome - fetching articles');
        const { data } = await storyblokApi.get('cdn/stories', {
          version: 'draft',
          filter_query: {
            component: {
              in: 'article'
            }
          }
        });
        console.log('BlogHome - received articles:', data.stories);
        setArticles(data.stories);
        setLoading(false);
      } catch (err) {
        console.error('BlogHome - error fetching articles:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
        setLoading(false);
      }
    };

    getArticles();
  }, [storyblokApi]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  // Get unique categories from all articles
  const dropdownItems = Array.from(
    new Set(
      articles.flatMap(article => article.content.Category || [])
    )
  );

  const handleFilter = () => {
    setShowDropDown(!showDropDown);
  };

  const handleCategorySelection = (category: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const filteredArticles = articles.filter((article) => {
    if (selectedCategories.length === 0) return true;
    return article.content.Category?.some((category: string) =>
      selectedCategories.includes(category)
    );
  });

  return (
    <div className="blog-section">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="relative" ref={dropdownRef}>
          <FilterButton onClick={handleFilter} />
          {showDropDown && (
            <DropDown
              items={dropdownItems}
              selectedItems={selectedCategories}
              onItemClick={handleCategorySelection}
            />
          )}
        </div>
      </div>
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.uuid} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
