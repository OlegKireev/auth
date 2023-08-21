import { type UseMutationResult } from '@tanstack/react-query';
import { type AuthError } from 'firebase/auth';
import { type ChangeEvent } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { setFormError } from '@/shared';

interface UseResetPasswordProps {
  mutation: UseMutationResult<boolean, AuthError, string>;
}

const validationSchema = object().shape({
  username: string().email().required(),
});

export const useResetPasswordForm = ({ mutation }: UseResetPasswordProps) => {
  const form = useFormik<{ username: string }>({
    initialValues: {
      username: '',
    },
    validationSchema,
    onSubmit: (values) =>
      mutation.mutate(values.username, {
        onSuccess: () => {
          form.setErrors({});
        },
        onError: (err) => {
          switch (err.code) {
            case 'auth/user-not-found':
              form.setFieldError('username', 'User is not found');
              break;
            default:
              setFormError(form, err.message);
              break;
          }
        },
      }),
  });

  const handleInputChange = (e: ChangeEvent) => {
    if (form.status) {
      form.setStatus('');
    }
    form.handleChange(e);
  };

  return {
    form,
    handleInputChange,
  };
};
