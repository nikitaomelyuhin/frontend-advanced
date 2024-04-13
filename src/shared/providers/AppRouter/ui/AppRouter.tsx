import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { RouteConfig } from '@/app/config/configRouter/configRouter';

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                Object.values(RouteConfig)
                    .map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
            }
        </Routes>
    </Suspense>
);
