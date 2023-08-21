import { type UseMutationResult } from '@tanstack/react-query';
import { type AuthError } from 'firebase/auth';
import { type ChangeEvent } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { type LoginServiceParams } from '../api';
import { setFormError } from '@/shared';
import { type User } from '@/entities/user';

interface UseLoginFormProps {
  mutation: UseMutationResult<User, AuthError, LoginServiceParams, unknown>;
}

const validationSchema = object().shape({
  username: string().email().required(),
  password: string().required(),
});

export const useLoginForm = ({ mutation }: UseLoginFormProps) => {
  const form = useFormik<LoginServiceParams>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) =>
      mutation.mutate(values, {
        onError(err) {
          switch (err.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              setFormError(form, 'Wrong username or password');
              break;
            case 'auth/too-many-requests':
              form.setErrors({
                username:
                  'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later',
              });
              break;
            case 'auth/email-already-in-use':
              form.setErrors({ username: 'This email is already uses' });
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
