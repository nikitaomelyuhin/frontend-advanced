import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTheme} from "@/shared/providers/ThemeProvider";
import {AppRouter} from "@/shared/providers/AppRouter";
import {NavBar} from "@/widgets/NabBar";

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
        </div>
    );
};

export default App;