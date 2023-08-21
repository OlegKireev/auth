import { type MutationOptions, useMutation } from '@tanstack/react-query';
import { type AuthError } from 'firebase/auth';
import { loginService, type LoginServiceParams } from '../api';
import { type User } from '@/entities/user';

export const useLoginMutation = (
  options?: MutationOptions<User, AuthError, LoginServiceParams>,
) => {
  return useMutation<User, AuthError, LoginServiceParams>(
    (params) => loginService(params),
    options,
  );
};
