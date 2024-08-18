import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Cannot fetch article by id'));
    }
  },
);
