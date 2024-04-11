import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import React from "react";
import {AppRoutes, RoutePath} from "@/app/config/configRouter/configRouter";
import {AppLink} from "@/shared/ui/AppLink/AppLink";

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
        </div>
    );
};