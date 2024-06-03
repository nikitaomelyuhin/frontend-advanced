import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { sideBarItems, SidebarItemType } from '../../model/items';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { collapsed, item } = props;
  const { t } = useTranslation();

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
