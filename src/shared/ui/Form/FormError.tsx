import { type HTMLProps, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useFormControlContext } from './FormControlContext';

interface FormErrorProps {
  children: ReactNode;
}

export const FormError = function FormError({
  children,
  ...rest
}: FormErrorProps & HTMLProps<HTMLSpanElement>) {
  const { isInvalid } = useFormControlContext();

  if (!isInvalid) {
    return null;
  }

  return (
    <span
      {...rest}
      className={clsx(styles.formError, rest.className)}
    >
      {children}
    </span>
  );
};
