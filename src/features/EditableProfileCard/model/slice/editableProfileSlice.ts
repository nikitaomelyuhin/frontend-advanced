import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfileSchema } from '../types/editableProfile';
import { fetchProfile, Profile } from '@/entities/Profile';

const initialState: EditableProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const editableProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions } = editableProfileSlice;
export const { reducer: profileReducer } = editableProfileSlice;
