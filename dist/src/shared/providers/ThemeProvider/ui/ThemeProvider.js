import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState, } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../types/themeContext';
var defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.NORMAL;
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(defaultTheme), theme = _b[0], setTheme = _b[1];
    useEffect(function () {
        if (!document.body.classList.contains('dark')
            && !document.body.classList.contains('normal')) {
            document.body.classList.add(theme);
        }
    }, [theme]);
    var defaultProps = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme,
    }); }, [theme]);
    return (_jsx(ThemeContext.Provider, { value: defaultProps, children: children }));
};
