import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider as ReactRouterProvider,
  Route,
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
import { Layout } from '@/shared';
import { MainNavigation } from '@/features/app-navigation';
import { useAuthContext } from '@/entities/user';

export const RouterProvider = function RouterProvider() {
  const { isProfileLoaded } = useAuthContext();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/** Base Layout */}
        <Route
          path="/"
          element={
            <Layout
              navigation={<MainNavigation />}
              isLoading={!isProfileLoaded}
            />
          }
          errorElement={<PageNotFound />}
        >
          <Route
            path=""
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/contacts"
            element={<ContactsPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Route>
        {/** Centred Layout */}
        <Route
          path="/"
          element={
            <Layout
              isCentred
              isLoading={!isProfileLoaded}
            />
          }
        >
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/sign-up"
            element={<SignUpPage />}
          />
          <Route
            path="/reset-password"
            element={<ResetPasswordPage />}
          />
        </Route>
      </>,
    ),
  );

  return (
    <ReactRouterProvider
      router={routes}
      fallbackElement={<PageNotFound />}
    />
  );
};
