import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';
var AboutPage = function (props) {
    var className = props.className;
    var t = useTranslation('about').t;
    return (_jsx("div", { className: classNames(cls.AboutPage, {}, [className]), children: t('About page') }));
};
export default AboutPage;
