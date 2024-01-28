import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES_QUERY } from '../../utils/apolloClient';
import { ArticleInterface } from './Article';
import Loader from '../Layout/Loader';
import FilterButton from '../Layout/FilterButton';
import DropDown from '../Layout/DropDown';
import ArticleCard from './ArticleCard';

export const BlogHome: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES_QUERY);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const dropdownItems = data.articles.data.reduce(
    (acc: string[], article: ArticleInterface) => {
      const categoryName = article.attributes.category?.data.attributes.name;
      if (categoryName && !acc.includes(categoryName)) {
        acc.push(categoryName);
      }
      return acc;
    },
    []
  );

  const handleFilter = () => {
    setShowDropDown(!showDropDown);
  };

  const handleCategorySelection = (category: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  const filteredArticles = data.articles.data.filter(
    (article: ArticleInterface) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(
        article.attributes.category?.data.attributes.name as string
      )
  );
  return (
    <div className=" BlogHome flex flex-col items-end relative ">
      <div className="relative">
        <FilterButton handleClick={handleFilter} />
        {showDropDown && (
          <DropDown
            items={dropdownItems}
            onCategoryChange={handleCategorySelection}
          />
        )}
      </div>
      {filteredArticles.map((article: ArticleInterface) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
