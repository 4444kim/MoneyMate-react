import { ReactElement } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { isAuth } = useAuth();
  if (isAuth === null) return null;

  return !isAuth ? children : <Navigate to="/" replace />;
};
