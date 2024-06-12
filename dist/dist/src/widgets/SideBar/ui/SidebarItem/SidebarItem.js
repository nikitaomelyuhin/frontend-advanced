import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkThemes } from '@/shared/ui/AppLink/AppLink';
export var SidebarItem = memo(function (props) {
    var _a;
    var collapsed = props.collapsed, item = props.item;
    var t = useTranslation().t;
    return (_jsxs(AppLink, { className: cls.item, to: item.to, theme: AppLinkThemes.PRIMARY, children: [_jsx(item.Icon, { className: cls.navIcon }), _jsx("span", { className: classNames(cls.navText, (_a = {}, _a[cls.navTextHidden] = collapsed, _a)), children: t(item.text, item.translationNs ? { ns: item.translationNs } : undefined) })] }));
});
