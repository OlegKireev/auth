import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { GithubIcon } from 'lucide-react';
import styles from './styles.module.scss';

interface LayoutProps {
  children: ReactNode;
  aside?: ReactNode;
  navigation?: ReactNode;
  hasAnimation?: boolean;
}

export const Layout = function Layout({
  children,
  aside,
  navigation,
  hasAnimation = false,
}: LayoutProps) {
  return (
    <div
      className={clsx(
        styles.layout,
        { [styles.fadeIn]: hasAnimation },
        'container',
      )}
    >
      {navigation && <header>{navigation}</header>}
      <div className={styles.wrapper}>
        {aside && <aside className={styles.aside}>{aside}</aside>}
        <main className={styles.main}>{children}</main>
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
    </div>
  );
};
