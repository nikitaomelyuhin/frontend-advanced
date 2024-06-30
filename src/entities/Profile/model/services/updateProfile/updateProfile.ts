import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/shared/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfile = createAsyncThunk<Profile, Profile, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfile',
  async (profile, { rejectWithValue, extra }) => {
    const errors = validateProfileData(profile);

    if (errors.length) {
      return rejectWithValue(errors);
    }
    try {
      const response = await extra.api.put<Profile>('/profile', profile);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
