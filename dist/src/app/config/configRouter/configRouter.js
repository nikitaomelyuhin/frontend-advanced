var _a;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
export var RouteConfig = (_a = {},
    _a[AppRoutes.MAIN] = {
        path: RoutePath[AppRoutes.MAIN],
        element: _jsx(MainPage, {}),
    },
    _a[AppRoutes.ABOUT] = {
        path: RoutePath[AppRoutes.ABOUT],
        element: _jsx(AboutPage, {}),
    },
    _a[AppRoutes.PROFILE] = {
        path: RoutePath[AppRoutes.PROFILE],
        element: _jsx(ProfilePage, {}),
    },
    // last
    _a[AppRoutes.NOT_FOUND] = {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: _jsx(NotFoundPage, {}),
    },
    _a);
