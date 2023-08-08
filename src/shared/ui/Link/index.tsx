import { type LinkHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface LinkProps {
  children: ReactNode;
}

export const Link = function Link({
  children,
  ...rest
}: LinkProps & LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      className={clsx(styles.link, rest.className)}
    >
      {children}
    </a>
  );
};
