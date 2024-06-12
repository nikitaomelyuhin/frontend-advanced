import { jsx as _jsx } from "react/jsx-runtime";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/ui/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from '@/shared/providers/StoreProvider';
render(_jsx(BrowserRouter, { children: _jsx(StoreProvider, { children: _jsx(ErrorBoundary, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }) }), document.getElementById('root'));
