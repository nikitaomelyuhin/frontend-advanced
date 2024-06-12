import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
export var NotFoundPage = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    return (_jsx("div", { className: classNames(cls.NotFoundPage, {}, [className]), children: t('Not found') }));
};
