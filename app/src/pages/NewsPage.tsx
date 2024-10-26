import { fetchTopHeadlineNews } from '@/apis/app';
import { useEffect } from 'react';

const NewsPage = () => {
  useEffect(() => {
    fetchTopHeadlineNews();
  }, []);

  return <div>NewsPage</div>;
};

export default NewsPage;
