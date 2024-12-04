import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import {
  getArticlesPageHasMore, getArticlesPageLoading, getArticlesPageNum,
} from '../../selectors/articlesListSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, { getState, dispatch }) => {
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageLoading(getState());
    const hasMore = getArticlesPageHasMore(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  },
);
