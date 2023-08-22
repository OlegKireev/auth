import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  isWide?: boolean;
  isLoading?: boolean;
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'main' | 'white';
}

export const Button = function Button({
  children,
  type = 'button',
  isWide = false,
  isLoading = false,
  href = '',
  variant = 'main',
  leftIcon = null,
  rightIcon = null,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>) {
  if (href) {
    return (
      <Link
        to={href}
        {...rest}
        className={clsx(styles.button, rest.className, styles[variant], {
          [styles.wide]: isWide,
          [styles.loading]: isLoading,
        })}
      >
        {leftIcon && (
          <span className={clsx(styles.icon, styles.left)}>{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className={clsx(styles.icon, styles.right)}>{rightIcon}</span>
        )}
      </Link>
    );
  }

  return (
    <button
      {...rest}
      className={clsx(styles.button, rest.className, styles[variant], {
        [styles.wide]: isWide,
        [styles.loading]: isLoading,
      })}
      disabled={isLoading || rest.disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {leftIcon && (
        <span className={clsx(styles.icon, styles.left)}>{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className={clsx(styles.icon, styles.right)}>{rightIcon}</span>
      )}
    </button>
  );
};
