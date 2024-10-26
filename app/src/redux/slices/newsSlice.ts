import { fetchTopHeadlineNews } from '@/apis/app';
import { Article } from '@/types/appTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
  newsList: Article[];
  loading: boolean;
  error: string | null;
}

const initialNewsState: NewsState = {
  newsList: [],
  loading: false,
  error: null,
};

export const fetchTopHeadlineNewsData = createAsyncThunk(
  'news/fetchTopHeadlineNews',
  async () => {
    return await fetchTopHeadlineNews();
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: initialNewsState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopHeadlineNewsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTopHeadlineNewsData.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.loading = false;
          state.newsList = action.payload;
        }
      )
      .addCase(fetchTopHeadlineNewsData.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to load data';
      });
  },
});

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;
