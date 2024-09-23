import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfile',
  async (profileId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Cannot fetch profile data'));
    }
  },
);
