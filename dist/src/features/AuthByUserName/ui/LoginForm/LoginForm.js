var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { Text } from '@/shared/ui/Text/Text';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
var initialReducers = {
    login: loginReducer,
};
var LoginForm = memo(function (props) {
    var className = props.className, onSuccess = props.onSuccess;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var username = useSelector(getLoginUsername);
    var password = useSelector(getLoginPassword);
    var isLoading = useSelector(getLoginLoading);
    var error = useSelector(getLoginError);
    useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: true });
    var onChangeUsername = useCallback(function (value) {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    var onChangePassword = useCallback(function (value) {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(loginByUsername({ username: username, password: password }))];
                case 1:
                    result = _a.sent();
                    if (result.meta.requestStatus === 'fulfilled') {
                        onSuccess();
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [dispatch, username, password, onSuccess]);
    return (_jsxs("div", { className: classNames(cls.loginForm, {}, [className]), children: [_jsx(Text, { title: t('Authorization form') }), error && _jsx(Text, { text: error, theme: "error" }), _jsx(Input, { type: "text", className: cls.input, placeholder: t('Enter username'), autofocus: true, onChange: onChangeUsername, value: username }), _jsx(Input, { type: "text", className: cls.input, placeholder: t('Enter password'), onChange: onChangePassword, value: password }), _jsx(Button, { className: cls.button, onClick: onLoginClick, theme: ButtonThemes.OUTLINE, disabled: isLoading, children: t('Sign in') })] }));
});
export default LoginForm;
