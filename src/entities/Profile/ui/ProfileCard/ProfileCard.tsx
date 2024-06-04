import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Input } from '@/shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const profileData = useSelector(getProfileData);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonThemes.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
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
