import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { LoginModal } from '@/features/AuthByUserName';

interface NavBarProps {
  className?: string;
}

export const Header = (props: NavBarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openSignInModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    console.log('onClose');
    setIsOpen(false);
  };

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button onClick={openSignInModal} theme={ButtonThemes.CLEAR}>
        {t('Sign in')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
