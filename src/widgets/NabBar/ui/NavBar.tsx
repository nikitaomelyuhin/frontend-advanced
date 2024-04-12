import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import React from "react";
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {AppRoutes, RoutePath} from "@/shared/constants/router";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <AppLink
                to={RoutePath[AppRoutes.MAIN]}
                theme={'inverted'}
            >
                mainPage
            </AppLink>
            <AppLink
                to={RoutePath[AppRoutes.ABOUT]}
                theme={'inverted'}
            >
                aboutPage
            </AppLink>
            <ThemeSwitcher />
            
        </div>
    );
};