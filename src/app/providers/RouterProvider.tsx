import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
  type RouteObject,
} from 'react-router-dom';
import {
  HomePage,
  PageNotFound,
  LoginPage,
  SignUpPage,
  ResetPasswordPage,
  AboutPage,
  ContactsPage,
  ProfilePage,
} from '@/pages';

const PRIVATE_ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <PageNotFound />,
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
    path: '/profile',
    element: <ProfilePage />,
  },
];

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
];

export const RouterProvider = function RouterProvider() {
  const routes = [...PRIVATE_ROUTES, ...PUBLIC_ROUTES];

  const router = createBrowserRouter(routes);

  return (
    <ReactRouterProvider
      router={router}
      fallbackElement={<PageNotFound />}
    />
  );
};
