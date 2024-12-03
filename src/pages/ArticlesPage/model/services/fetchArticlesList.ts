import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
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
