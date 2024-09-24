import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getEditableProfileData } from '@/features/EditableProfileCard/model/selectors/getEditableProfileData/getEditableProfileData';

export const getCanEdit = createSelector(
  getUserAuthData,
  getEditableProfileData,
  (userAuthData, profileData) => {
    return userAuthData?.id === profileData?.id;
  },
);
