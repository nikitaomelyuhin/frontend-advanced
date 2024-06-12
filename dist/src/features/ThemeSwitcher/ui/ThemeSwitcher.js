import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/providers/ThemeProvider';
import SvgMoon from '@/shared/assets/icons/moon.svg';
import SvgSun from '@/shared/assets/icons/sun.svg';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
export var ThemeSwitcher = function (props) {
    var className = props.className;
    var _a = useTheme(), toggleTheme = _a.toggleTheme, theme = _a.theme;
    return (_jsx("div", { className: classNames(cls.ThemeSwitcher, {}, [className]), children: _jsx(Button, { theme: ButtonThemes.CLEAR, onClick: toggleTheme, children: theme === 'dark'
                ? (_jsx(SvgMoon, { className: classNames(cls.icon, {}, [cls.iconMoon]) }))
                : (_jsx(SvgSun, { className: classNames(cls.icon, {}, [cls.iconSun]) })) }) }));
};
