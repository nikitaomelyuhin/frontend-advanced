import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
export var Loader = function (props) {
    var className = props.className;
    return (_jsx("div", { className: classNames(cls.Loader, {}, [className]), children: _jsx("div", { className: cls.loader }) }));
};
