import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';
import { GithubIcon, Loader2Icon } from 'lucide-react';
import styles from './styles.module.scss';

interface LayoutProps {
  aside?: ReactNode;
  navigation?: ReactNode;
  isCentred?: boolean;
  isLoading?: boolean;
}

export const Layout = function Layout({
  aside,
  navigation,
  isCentred = false,
  isLoading = false,
}: LayoutProps) {
  return (
    <div
      className={clsx(styles.layout, {
        [styles.center]: isCentred || isLoading,
        container: !isCentred,
      })}
    >
      {isLoading ? (
        <Loader2Icon className={styles.loader} />
      ) : (
        <>
          {navigation && <header>{navigation}</header>}
          <div className={styles.wrapper}>
            {aside && <aside className={styles.aside}>{aside}</aside>}
            <main className={clsx(styles.main, { [styles.center]: isCentred })}>
              <Outlet />
            </main>
          </div>
          <footer className={styles.footer}>
            <a
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/OlegKireev"
            >
              <GithubIcon />
            </a>
          </footer>
        </>
      )}
    </div>
  );
};
