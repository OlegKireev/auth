import { type ReactNode } from 'react';
import {
  FormControlContextProvider,
  type FormControlContextValue,
} from './FormControlContext';

interface FormControlProps {
  children: ReactNode;
}

export const FormControl = function FormControl({
  children,
  ...rest
}: FormControlProps & Partial<FormControlContextValue>) {
  return (
    <FormControlContextProvider {...rest}>
      {children}
    </FormControlContextProvider>
  );
};
