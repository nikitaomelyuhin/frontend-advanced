import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/constants/router';

interface NavBarProps {
    className?: string;
}

export const Header = (props: NavBarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            /
        </div>
    );
};
