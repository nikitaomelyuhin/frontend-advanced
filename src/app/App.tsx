import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/providers/ThemeProvider';
import { AppRouter } from '@/shared/providers/AppRouter';
import { NavBar } from '@/widgets/NabBar';
import { SideBar } from '@/widgets/SideBar';

import '@/app/config/i18n/i18n';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="content">
                <SideBar />
                <div className="content-body">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};

export default App;
