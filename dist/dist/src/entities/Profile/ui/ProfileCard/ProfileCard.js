import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonThemes } from '@/shared/ui/Button/Button.types';
import { Input } from '@/shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
export var ProfileCard = function (props) {
    var _a, _b;
    var className = props.className;
    var t = useTranslation().t;
    var profileData = useSelector(getProfileData);
    return (_jsxs("div", { className: classNames(cls.profileCard, {}, [className]), children: [_jsxs("div", { className: cls.header, children: [_jsx(Text, { title: t('Profile') }), _jsx(Button, { theme: ButtonThemes.OUTLINE, children: t('Edit') })] }), _jsxs("div", { className: cls.data, children: [_jsx(Input, { placeholder: t('Enter firstname'), value: (_a = profileData === null || profileData === void 0 ? void 0 : profileData.first) !== null && _a !== void 0 ? _a : '' }), _jsx(Input, { placeholder: t('Enter lastname'), value: (_b = profileData === null || profileData === void 0 ? void 0 : profileData.lastname) !== null && _b !== void 0 ? _b : '' })] })] }));
};
