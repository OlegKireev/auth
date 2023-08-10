import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';
import { HomePage, LoginPage, AboutPage, ContactsPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const RouterProvider = function RouterProvider() {
  return <ReactRouterProvider router={router} />;
};
