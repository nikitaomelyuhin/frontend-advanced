import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/app/config/i18n/i18nForTests';
import { StoreProvider } from '@/shared/providers/StoreProvider';
export function componentRender(component, options) {
    if (options === void 0) { options = {}; }
    var _a = options.route, route = _a === void 0 ? '/' : _a, initialState = options.initialState;
    return render(_jsx(StoreProvider, { initialState: initialState, children: _jsx(MemoryRouter, { initialEntries: [route], children: _jsx(I18nextProvider, { i18n: i18nForTests, children: component }) }) }));
}
