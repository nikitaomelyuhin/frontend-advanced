import { useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import SvgArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import SvgArrowRight from '@/shared/assets/icons/arrow-right.svg';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/Button.types';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItem } from '../../model/selectors/getSidebarItem';

interface SideBarProps {
  className?: string;
}

export const SideBar = (props: SideBarProps) => {
  const { className } = props;

  const sideBarItems = useSelector(getSidebarItem);

  const [collapsed, setCollapsed] = useState(false);

  const toggleBar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="SideBar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.nav}>
        {sideBarItems.map((item) => (
          <SidebarItem
            key={item.to}
            item={item}
            collapsed={collapsed}
          />
        ))}
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
