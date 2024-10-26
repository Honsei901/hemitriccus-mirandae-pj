import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  fetchTopHeadlineNewsData,
  clearNewsList,
} from '@/redux/slices/newsSlice';
import { useEffect } from 'react';

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { newsList, loading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchTopHeadlineNewsData());

    return () => {
      dispatch(clearNewsList());
    };
  }, [dispatch]);

  return (
    <div>
      {error && <div className="text-2xl">{error}</div>}

      {loading && <div className="text-2xl">Loading...</div>}

      {!loading && (
        <div className="flex flex-col items-center">
          <div className="mt-2 text-3xl">News</div>
          {newsList.map((item, index) => {
            if (!item.content) return;
            return (
              <div
                key={index}
                className="w-[600px] my-5 py-5 px-10 flex flex-col items-center"
              >
                <div className="font-bold text-lg">{item.title}</div>
                <div>
                  <img src={item.urlToImage || ''} alt="image" />
                  <div>{item.description}</div>
                  <div>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
