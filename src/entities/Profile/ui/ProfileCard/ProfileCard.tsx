import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text } from '@/shared/ui/Text/Text';

interface ProfileCardProps {
  className?: string;
  profileData?: Profile;
  isLoading: boolean;
  error: string | null;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    profileData,
    isLoading,
    error,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.loading, {}, [cls.profileCard])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.error, {}, [cls.profileCard])}>
        <Text
          title={t('Cannot get profile data')}
          text={t('Try to reload page')}
          theme="error"
          textAlign="center"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          placeholder={t('Enter firstname')}
          value={profileData?.first ?? ''}
          onChange={onChangeFirstName}
        />
        <Input
          placeholder={t('Enter lastname')}
          value={profileData?.lastname ?? ''}
          onChange={onChangeLastName}
        />
        <Input
          placeholder={t('Enter age')}
          value={profileData?.age ?? ''}
          onChange={onChangeAge}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <Input
          placeholder={t('Enter city')}
          value={profileData?.city ?? ''}
          onChange={onChangeCity}
        />
      </div>
    </div>
  );
};
