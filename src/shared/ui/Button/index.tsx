import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  isWide?: boolean;
  isLoading?: boolean;
  href?: string;
}

export const Button = function Button({
  children,
  type = 'button',
  isWide = false,
  isLoading = false,
  href = '',
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>) {
  if (href) {
    return (
      <Link
        to={href}
        {...rest}
        className={clsx(styles.button, rest.className, {
          [styles.wide]: isWide,
          [styles.loading]: isLoading,
        })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={clsx(styles.button, rest.className, {
        [styles.wide]: isWide,
        [styles.loading]: isLoading,
      })}
      disabled={isLoading || rest.disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};
