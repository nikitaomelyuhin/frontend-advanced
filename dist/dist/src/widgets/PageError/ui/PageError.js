import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
export var PageError = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var reloadPage = function () {
        window.location.reload();
    };
    return (_jsxs("div", { className: classNames(cls.PageError, {}, [className]), children: [t('Something went wrong'), _jsx(Button, { onClick: reloadPage, theme: ButtonThemes.CLEAR, children: t('Reload page') })] }));
};
