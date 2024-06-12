import { jsx as _jsx } from "react/jsx-runtime";
import { memo, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';
export var LoginModal = memo(function (props) {
    var className = props.className, isOpen = props.isOpen, onClose = props.onClose;
    return (_jsx(Modal, { lazy: true, className: classNames('', {}, [className]), isOpen: isOpen, onClose: onClose, children: _jsx(Suspense, { fallback: _jsx(Loader, { className: classNames(cls.loader) }), children: isOpen && (_jsx(LoginForm, { onSuccess: onClose })) }) }));
});
