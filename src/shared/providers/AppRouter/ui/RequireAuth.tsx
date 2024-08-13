import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/constants/router';

export const RequireAuth = ({ children } : { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
