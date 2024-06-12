var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from './Text';
import { ThemeDecorator } from '@/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'text',
};
export var onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};
export var onlyText = Template.bind({});
onlyText.args = {
    text: 'text',
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export var onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Error = Template.bind({});
Error.args = {
    title: 'Some title',
    text: 'Description Description',
    theme: 'error',
};
export var ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Some title',
    text: 'Description Description',
    theme: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
