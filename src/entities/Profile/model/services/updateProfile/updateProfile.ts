import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '@/app/config/i18n/i18n';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const updateProfile = createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
  'profile/updateProfile',
  async (profile, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.post<Profile>('/profile', profile);
      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('Cannot update profile data'));
    }
  },
);
