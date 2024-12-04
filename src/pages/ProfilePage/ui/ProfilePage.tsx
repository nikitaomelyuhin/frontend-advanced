import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { ReducersList } from '@/shared/hooks/useDynamicModuleLoader.types';
import { fetchProfile } from '@/entities/Profile';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { EditableProfileCard, editableProfileReducer } from '@/features/EditableProfileCard';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useIntialEffect';
import { getCanEdit } from '../model/selectors/canEdit';
import { Page } from '@/shared/ui/Page/Page';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  editableProfile: editableProfileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const { id } = useParams<{id: string}>();
  const canEdit = useSelector(getCanEdit);

  useDynamicModuleLoader({ reducers, removeAfterUnmount: false });

  useInitialEffect(() => {
    if (!id) return;

    dispatch(fetchProfile(id));
  });

  return (
    <Page className={classNames(cls.profilePage, {}, [className])}>
      {canEdit && <ProfilePageHeader />}

      <EditableProfileCard />
    </Page>
  );
};

export default ProfilePage;
