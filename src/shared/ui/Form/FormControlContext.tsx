import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
} from 'react';

export interface FormControlContextValue {
  isInvalid: boolean;
  isDisabled: boolean;
}

const FormControlContext = createContext<FormControlContextValue>({
  isInvalid: false,
  isDisabled: false,
});

export const FormControlContextProvider: FC<
  PropsWithChildren & Partial<FormControlContextValue>
> = function FormControlContextProvider({
  children,
  isDisabled = false,
  isInvalid = false,
}) {
  return (
    <FormControlContext.Provider
      value={{
        isDisabled,
        isInvalid,
      }}
    >
      {children}
    </FormControlContext.Provider>
  );
};

export const useFormControlContext = () => {
  const context = useContext(FormControlContext);

  if (!context) {
    throw new Error(
      'useFormControlContext must be used within an FormControlContextProvider',
    );
  }

  return context;
};
