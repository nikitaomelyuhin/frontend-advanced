import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
import { getUserAuthData } from '@/entities/User';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { collapsed, item } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={cls.item}
      to={item.to}
      theme={AppLinkThemes.PRIMARY}
    >
      <item.Icon className={cls.navIcon} />
      <span
        className={classNames(
          cls.navText,
          { [cls.navTextHidden]: collapsed },
        )}
      >
        {t(item.text, item.translationNs ? { ns: item.translationNs } : undefined)}
      </span>
    </AppLink>
  );
});
