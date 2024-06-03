import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkThemes {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  to: string;
  children: ReactNode;
  theme?: AppLinkThemes;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    theme = AppLinkThemes.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
