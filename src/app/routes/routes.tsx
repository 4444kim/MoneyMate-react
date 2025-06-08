import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayot';

import DashboardPage from '../../pages/dashboard/ui/MainPage';
import ProfilePage from '../../pages/profile/ui/ProfilePage';
import LoginPage from '../../pages/login/ui/LoginPage';
import RegisterPage from '../../pages/register/ui/RegisterPage';
import NotFoundPage from '../../pages/not-found/ui/NotFoundPage';

import { PrivateRoute } from '../routes/PrivateRoutes';
import { PublicRoute } from '../routes/PublicRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
