import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';
import { HomePage, LoginPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const RouterProvider = function RouterProvider() {
  return <ReactRouterProvider router={router} />;
};
