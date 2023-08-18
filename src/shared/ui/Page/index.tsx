import { type ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

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
    throw new Error('Page not found');
  }

  return children;
};
