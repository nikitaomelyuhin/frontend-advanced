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
    let newTheme: null | Theme = null;

    switch (theme) {
    case Theme.NORMAL:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.ORANGE;
      break;
    default:
      newTheme = Theme.NORMAL;
      break;
    }
    setTheme?.(newTheme);
    if (theme) {
      document.body.classList.remove(theme);
    }
    document.body.classList.add(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { toggleTheme, theme: theme || Theme.NORMAL };
}
