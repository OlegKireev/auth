import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  isWide?: boolean;
}

export const Button = function Button({
  children,
  type = 'button',
  isWide = false,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={clsx(styles.button, rest.className, { [styles.wide]: isWide })}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};
