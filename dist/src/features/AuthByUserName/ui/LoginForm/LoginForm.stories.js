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
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/app/config/storybook/StoreDecorator/StoreDecorator';
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(LoginForm, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
        login: { username: '123', password: 'asdf' },
    })];
export var withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
        login: { username: '1234', password: '1234', error: 'error message' },
    })];
export var Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
        login: { isLoading: true },
    })];
