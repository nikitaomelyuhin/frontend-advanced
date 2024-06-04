import { useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { fetchProfile, ProfileCard, profileReducer } from '@/entities/Profile';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
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
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
