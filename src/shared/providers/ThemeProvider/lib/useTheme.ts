import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../types/themeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { toggleTheme, theme };
}
