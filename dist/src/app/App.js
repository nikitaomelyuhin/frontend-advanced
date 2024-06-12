import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { Header } from '@/widgets/Header';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/shared/providers/AppRouter';
import { SideBar } from '@/widgets/SideBar';
import '@/app/config/i18n/i18n';
// eslint-disable-next-line import/order
import { useDispatch } from 'react-redux';
import { userActions } from '@/entities/User';
var App = function () {
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", { className: classNames('app'), children: _jsxs(Suspense, { fallback: "", children: [_jsx(Header, {}), _jsxs("div", { className: "content", children: [_jsx(SideBar, {}), _jsx("div", { className: "content-body", children: _jsx(AppRouter, {}) })] })] }) }));
};
export default App;
