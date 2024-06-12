var _a;
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    // last
    AppRoutes["NOT_FOUND"] = "not-found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile',
    // last!
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
