import { Route, Routes } from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { routeConfig } from '@/app/config/configRouter/configRouter';
import { PageLoader } from '@/widgets/PageLoader';
import { getUserAuthData } from '@/entities/User';

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>

  );
};
