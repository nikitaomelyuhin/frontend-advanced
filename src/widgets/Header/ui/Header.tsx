import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { RoutePath } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Text } from '@/shared/ui/Text/Text';
import cls from './Header.module.scss';
import { AppLinkThemes } from '../../../shared/ui/AppLink/AppLink';
import { TextThemes } from '@/shared/ui/Text/Text.types';

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
        <Text
          className={cls.appName}
          title={t('Super App')}
          theme={TextThemes.INVERTED}
        />
        <AppLink
          theme={AppLinkThemes.PRIMARY}
          to={RoutePath['article-create']}
        >
          {t('Create article')}
        </AppLink>
        <Button
          className={cls.links}
          onClick={onLogout}
          theme={ButtonThemes.CLEAR}
        >
          {t('Logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button
        className={cls.links}
        onClick={openSignInModal}
        theme={ButtonThemes.CLEAR}
      >
        {t('Sign in')}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
});
