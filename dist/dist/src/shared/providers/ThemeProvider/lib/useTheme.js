import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../types/themeContext';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        if (theme) {
            document.body.classList.remove(theme);
        }
        document.body.classList.add(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { toggleTheme: toggleTheme, theme: theme || Theme.NORMAL };
}
