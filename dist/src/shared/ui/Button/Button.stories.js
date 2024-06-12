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
import { ThemeDecorator } from '@/app/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/providers/ThemeProvider';
import { Button } from './Button';
import { ButtonSize, ButtonThemes } from '@/shared/ui/Button/Button.types';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonThemes.CLEAR,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonThemes.OUTLINE,
};
export var OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    theme: ButtonThemes.OUTLINE,
    size: ButtonSize.L,
};
export var OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    theme: ButtonThemes.OUTLINE,
    size: ButtonSize.XL,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonThemes.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonThemes.BACKGROUND,
};
export var BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonThemes.BACKGROUND_INVERTED,
};
export var Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonThemes.BACKGROUND,
    square: true,
};
export var SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonThemes.BACKGROUND,
    square: true,
    size: ButtonSize.M,
};
export var SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonThemes.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
};
export var SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonThemes.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};
export var Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonThemes.OUTLINE,
    disabled: true,
};
