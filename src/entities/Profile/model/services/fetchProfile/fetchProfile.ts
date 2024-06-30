import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfile',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Cannot fetch profile data'));
    }
  },
);
