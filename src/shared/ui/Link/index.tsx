import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styles from './styles.module.scss';

interface LinkProps {
  children: ReactNode;
}

export const Link = function Link({
  children,
  ...rest
}: LinkProps & RouterLinkProps) {
  return (
    <RouterLink
      {...rest}
      className={clsx(styles.link, rest.className)}
    >
      {children}
    </RouterLink>
  );
};
