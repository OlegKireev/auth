import { type ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { PageNotFound } from '@/pages';

interface PageProps {
  children: ReactNode;
  isLoggedIn: boolean;
  type: 'private' | 'public' | 'both';
}

export const Page = function Page({
  children,
  type = 'private',
  isLoggedIn,
}: PageProps) {
  const location = useLocation();

  if (type === 'private' && !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  if (type === 'public' && isLoggedIn) {
    return <PageNotFound />;
  }

  return children;
};
