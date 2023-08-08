import { type LabelHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface LabelProps {
  children: ReactNode;
}

export const Label = function Label({
  children,
  ...rest
}: LabelProps & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...rest}
      className={clsx(styles.label, rest.className)}
    >
      {children}
    </label>
  );
};
