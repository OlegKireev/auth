import { type ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import styles from './styles.module.scss';

interface PageProps {
  children: ReactNode;
  isLoggedIn: boolean;
  isLoading: boolean;
  type: 'private' | 'public' | 'both';
}

export const Page = function Page({
  children,
  type = 'private',
  isLoggedIn,
  isLoading,
}: PageProps) {
  const location = useLocation();

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader2 className={styles.loader} />
      </div>
    );
  }

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
