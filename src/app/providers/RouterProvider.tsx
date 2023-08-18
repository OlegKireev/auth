import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
  type RouteObject,
} from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  AboutPage,
  ContactsPage,
  SignUpPage,
  PageNotFound,
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
