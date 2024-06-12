import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
export var Text = memo(function (props) {
    var className = props.className, title = props.title, text = props.text, _a = props.theme, theme = _a === void 0 ? 'primary' : _a;
    return (_jsxs("div", { className: classNames('', {}, [className, cls[theme]]), children: [title && _jsx("p", { className: cls.title, children: title }), text && _jsx("p", { className: cls.text, children: text })] }));
});
