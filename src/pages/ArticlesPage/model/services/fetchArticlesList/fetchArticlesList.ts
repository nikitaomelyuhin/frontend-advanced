import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import {
  getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesListSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchCommentsByArticleId',
  async (_, { rejectWithValue, extra, getState }) => {
    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const order = getArticlesPageOrder(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _order: order,
          _sort: sort,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('error'));
    }
  },
);
