import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { Input } from '@/shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  profileData?: Profile
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, profileData } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          placeholder={t('Enter firstname')}
          value={profileData?.first ?? ''}
        />
        <Input
          placeholder={t('Enter lastname')}
          value={profileData?.lastname ?? ''}
        />
      </div>
    </div>
  );
};
