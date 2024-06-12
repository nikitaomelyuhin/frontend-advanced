import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { sideBarItems } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
export var SideBar = function (props) {
    var _a;
    var className = props.className;
    var t = useTranslation(['translation', 'about']).t;
    var _b = useState(false), collapsed = _b[0], setCollapsed = _b[1];
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var toggleBar = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var openModal = useCallback(function () {
        setIsOpen(true);
    }, []);
    var closeModal = useCallback(function () {
        setIsOpen(false);
    }, []);
    return (_jsxs("div", { "data-testid": "SideBar", className: classNames(cls.SideBar, (_a = {}, _a[cls.collapsed] = collapsed, _a), [className]), children: [_jsx("div", { className: cls.nav, children: sideBarItems.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.to)); }) }), _jsx(Button, { onClick: toggleBar, className: cls.button, theme: ButtonThemes.BACKGROUND, square: true, size: ButtonSize.L, "data-testid": "side-bar-button", children: collapsed
                    ? _jsx(SvgArrowRight, { className: classNames(cls.icon) })
                    : _jsx(SvgArrowLeft, { className: classNames(cls.icon) }) }), _jsxs("div", { className: classNames(cls.footer), children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { short: collapsed })] })] }));
};
