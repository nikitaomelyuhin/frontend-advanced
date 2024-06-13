import { useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { fetchProfile, profileReducer } from '@/entities/Profile';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { EditableProfileCard, editableProfileReducer } from '@/features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  editableProfile: editableProfileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePage, {}, [className])}>
      <ProfilePageHeader />
      <EditableProfileCard />
    </div>
  );
};

export default ProfilePage;
