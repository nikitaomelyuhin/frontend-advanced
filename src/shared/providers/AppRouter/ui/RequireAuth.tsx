import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/constants/router';

export const RequireAuth = ({ children } : { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} replace />;
  }

  return children;
};
