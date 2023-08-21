import { type LabelHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface FormLabelProps {
  children: ReactNode;
}

export const FormLabel = function FormLabel({
  children,
  ...rest
}: FormLabelProps & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...rest}
      className={clsx(styles.formLabel, rest.className)}
    >
      {children}
    </label>
  );
};
