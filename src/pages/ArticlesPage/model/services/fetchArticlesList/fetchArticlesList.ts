import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesListSelectors';

interface FetchArticleProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticleProps, ThunkConfig<string>>(
  'articlesPage/fetchCommentsByArticleId',
  async (props, { rejectWithValue, extra, getState }) => {
    const { page = 1 } = props;

    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
