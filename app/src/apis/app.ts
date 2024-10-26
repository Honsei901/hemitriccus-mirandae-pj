import { Article } from '@/types/appTypes';
import axios from 'axios';

interface FetchTopHeadlineNewsResponse {
  articles: Article[];
  status: string;
  totalResults: number;
}

export const fetchTopHeadlineNews = async () => {
  try {
    const { data } = await axios.get<FetchTopHeadlineNewsResponse>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data.articles;
  } catch (error) {
    throw new Error(error as string);
  }
};
