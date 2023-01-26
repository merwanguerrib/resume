import { Route, useLocation } from 'react-router-dom';
import { Preview } from './Preview';
import { Article } from './Article';

export const Blog: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/blog' ? <Preview /> : location.pathname.indexOf('/blog/article/') === -1 ? <Preview /> : <Route path="/blog/article/:slug" element={<Article />} />}
    </>
  )
}
