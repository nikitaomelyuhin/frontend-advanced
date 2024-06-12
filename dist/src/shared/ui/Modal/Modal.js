import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useCallback, useRef, useState, } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';
var TIMEOUT = 300;
export var Modal = function (props) {
    var _a, _b;
    var className = props.className, children = props.children, isOpen = props.isOpen, lazy = props.lazy, onClose = props.onClose;
    var timeoutRef = useRef(null);
    var _c = useState(false), isClosing = _c[0], setIsClosing = _c[1];
    var _d = useState(false), isMounted = _d[0], setIsMounted = _d[1];
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    var closeModal = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, TIMEOUT);
        }
    }, [onClose]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);
    useEffect(function () {
        window.addEventListener('keydown', onKeyDown);
        return function () {
            window.removeEventListener('keydown', onKeyDown);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isOpen, onKeyDown]);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    if (lazy && !isMounted)
        return null;
    return (_jsx(Portal, { children: _jsx("div", { className: classNames(cls.Modal, (_a = {},
                _a[cls.open] = isOpen,
                _a[cls.closing] = isClosing,
                _a), [className]), children: _jsx("div", { className: cls.overlay, onClick: closeModal, children: _jsx("div", { className: classNames(cls.content, (_b = {}, _b[cls.contentOpened] = isOpen, _b)), onClick: onContentClick, children: children }) }) }) }));
};
