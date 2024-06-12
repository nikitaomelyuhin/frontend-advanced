import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData, userActions } from '@/entities/User';
export var Header = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var openSignInModal = useCallback(function () {
        setIsOpen(true);
    }, []);
    var onClose = useCallback(function () {
        setIsOpen(false);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (_jsx("div", { className: classNames(cls.NavBar, {}, [className]), children: _jsx(Button, { onClick: onLogout, theme: ButtonThemes.CLEAR, children: t('Logout') }) }));
    }
    return (_jsxs("div", { className: classNames(cls.NavBar, {}, [className]), children: [_jsx(Button, { onClick: openSignInModal, theme: ButtonThemes.CLEAR, children: t('Sign in') }), _jsx(LoginModal, { isOpen: isOpen, onClose: onClose })] }));
});
