import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import { Input } from '@/shared/ui/Input/Input';
var MainPage = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (val) {
        setValue(val);
    };
    return (_jsxs("div", { className: classNames(cls.MainPage, {}, [className]), children: [t('Main page'), _jsx(Input, { value: value, onChange: onChange, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442" })] }));
};
export default MainPage;
