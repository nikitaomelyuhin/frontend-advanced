var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from '@/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import { AppLink, AppLinkThemes } from './AppLink';
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};
var Template = function (args) { return _jsx(AppLink, __assign({}, args)); };
export var Normal = Template.bind({});
Normal.args = {
    children: 'Text',
    theme: AppLinkThemes.PRIMARY,
};
export var Inverted = Template.bind({});
Inverted.args = {
    children: 'Text',
    theme: AppLinkThemes.INVERTED,
};
export var Dark = Template.bind({});
Dark.args = {
    children: 'Text',
    theme: AppLinkThemes.PRIMARY,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
