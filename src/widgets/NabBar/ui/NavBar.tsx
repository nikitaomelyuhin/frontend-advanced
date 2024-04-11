import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import React from "react";
import {AppLink} from "@/shared/ui/AppLink";

interface NavBarProps {
    className?: string;
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <AppLink
                to={'/'}
                theme={'inverted'}
            >
                mainPage
            </AppLink>
            <AppLink
                theme={'inverted'}
                to={'/about'}
            >
                aboutPage
            </AppLink>
        </div>
    );
};