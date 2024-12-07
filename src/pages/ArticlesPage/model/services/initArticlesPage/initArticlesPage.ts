import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesListSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, { getState, dispatch }) => {
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  },
);
