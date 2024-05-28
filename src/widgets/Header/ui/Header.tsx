import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData, userActions } from '@/entities/User';

interface NavBarProps {
  className?: string;
}

export const Header = memo((props: NavBarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const openSignInModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.NavBar, {}, [className])}>
        <Button onClick={onLogout} theme={ButtonThemes.CLEAR}>
          {t('Logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button onClick={openSignInModal} theme={ButtonThemes.CLEAR}>
        {t('Sign in')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
});
