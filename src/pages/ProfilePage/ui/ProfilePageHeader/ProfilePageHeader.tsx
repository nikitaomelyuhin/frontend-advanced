import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      <Button theme={ButtonThemes.OUTLINE}>
        {t('Edit')}
      </Button>
    </div>
  );
};
