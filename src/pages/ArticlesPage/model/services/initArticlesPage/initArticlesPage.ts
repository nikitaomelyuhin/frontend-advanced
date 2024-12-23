import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesListSelectors';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, { getState, dispatch }) => {
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order');
      const searchFromUrl = searchParams.get('search');
      const sortFromUrl = searchParams.get('sort');
      const typeFromUrl = searchParams.get('type');

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField));
      }

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
