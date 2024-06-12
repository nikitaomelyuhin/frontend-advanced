import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';
export var PageLoader = function (props) {
    var className = props.className;
    return (_jsx("div", { className: classNames(cls.PageLoader, {}, [className]), children: _jsx(Loader, {}) }));
};
