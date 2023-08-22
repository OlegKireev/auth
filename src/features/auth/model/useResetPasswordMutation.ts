import { type MutationOptions, useMutation } from '@tanstack/react-query';
import { type AuthError } from 'firebase/auth';
import { resetPasswordService } from '../api';

export const useResetPasswordMutation = (
  options?: MutationOptions<boolean, AuthError, string>,
) => {
  return useMutation<boolean, AuthError, string>(
    (email) => resetPasswordService(email),
    options,
  );
};
