import { jsx as _jsx } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { RouteConfig } from '@/app/config/configRouter/configRouter';
import { PageLoader } from '@/widgets/PageLoader';
export var AppRouter = function () { return (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(Routes, { children: Object.values(RouteConfig)
            .map(function (_a) {
            var path = _a.path, element = _a.element;
            return (_jsx(Route, { path: path, element: element }, path));
        }) }) })); };
