import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss"
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTheme} from "@/shared/providers/ThemeProvider";
import {AboutPage} from "@/pages/AboutPage";
import {MainPage} from "@/pages/MainPage";

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>changeTheme</button><br/>
            <Link to={'/'}>mainPage</Link><br/>
            <Link to={'/about'}>aboutPage</Link><br/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;