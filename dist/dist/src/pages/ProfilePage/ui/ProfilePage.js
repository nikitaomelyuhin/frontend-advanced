import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { fetchProfile, ProfileCard, profileReducer } from '@/entities/Profile';
import { useDynamicModuleLoader } from '@/shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
var reducers = {
    profile: profileReducer,
};
var ProfilePage = function (props) {
    var className = props.className;
    var dispatch = useAppDispatch();
    useDynamicModuleLoader({ reducers: reducers, removeAfterUnmount: true });
    useEffect(function () {
        dispatch(fetchProfile());
    }, [dispatch]);
    return (_jsx("div", { className: classNames(cls.profilePage, {}, [className]), children: _jsx(ProfileCard, {}) }));
};
export default ProfilePage;
