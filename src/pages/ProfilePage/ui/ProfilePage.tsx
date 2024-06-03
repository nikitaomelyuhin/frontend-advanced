import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { profileReducer } from '@/entities/profile';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  useDynamicModuleLoader({ reducers, removeAfterUnmount: true });
  return (
    <div className={classNames(cls.profilePage, {}, [className])}>
      ProfilePage
    </div>
  );
};

export default ProfilePage;
