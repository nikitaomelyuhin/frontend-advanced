import { jsx as _jsx } from "react/jsx-runtime";
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18n from '../../i18n/i18n';
export var TranslationDecorator = function (StoryComponent) { return (_jsx(I18nextProvider, { i18n: i18n, children: _jsx(Suspense, { fallback: "", children: _jsx(StoryComponent, {}) }) })); };
