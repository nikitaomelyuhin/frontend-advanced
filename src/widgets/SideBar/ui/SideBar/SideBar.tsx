import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import SvgArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import SvgArrowRight from '@/shared/assets/icons/arrow-right.svg';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/Button.types';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import SvgHome from '@/shared/assets/icons/home.svg';
import SvgAbout from '@/shared/assets/icons/about.svg';
import { Modal } from '@/shared/ui/Modal/Modal';

interface SideBarProps {
  className?: string;
}

export const SideBar = (props: SideBarProps) => {
  const { className } = props;

  const { t } = useTranslation(['translation', 'about']);

  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setCollapsed((prev) => !prev);
  };

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      data-testid="SideBar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.nav}>
        <AppLink
          className={cls.item}
          to={RoutePath[AppRoutes.MAIN]}
          theme={AppLinkThemes.PRIMARY}
        >
          <SvgHome className={cls.nav_icon} />
          <span
            className={classNames(
              cls.nav_text,
              { [cls.nav_text_hidden]: collapsed },
            )}
          >
            {t('Main page')}
          </span>
        </AppLink>
        <AppLink
          className={cls.item}
          to={RoutePath[AppRoutes.ABOUT]}
          theme={AppLinkThemes.PRIMARY}
        >
          <SvgAbout className={cls.nav_icon} />
          <span
            className={classNames(
              cls.nav_text,
              { [cls.nav_text_hidden]: collapsed },
            )}
          >
            {t('About page', { ns: 'about' })}
          </span>
        </AppLink>
      </div>
      <Button
        onClick={toggleBar}
        className={cls.button}
        theme={ButtonThemes.BACKGROUND}
        square
        size={ButtonSize.L}
        data-testid="side-bar-button"
      >
        {collapsed
          ? <SvgArrowRight className={classNames(cls.icon)} />
          : <SvgArrowLeft className={classNames(cls.icon)} />}
      </Button>
      <div className={classNames(cls.footer)}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>

    </div>
  );
};
