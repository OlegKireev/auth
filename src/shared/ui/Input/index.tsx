import { type InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface InputProps {
  hasError?: boolean;
}

export const Input = function Input({
  hasError,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={clsx(
        styles.input,
        { [styles.error]: hasError },
        rest.className,
      )}
    />
  );
};
