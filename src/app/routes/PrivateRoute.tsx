import { Navigate } from 'react-router';
import { useAuth } from '../providers/AuthProvider';
import { ReactElement } from 'react';

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};
