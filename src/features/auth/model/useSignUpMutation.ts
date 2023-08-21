import { type MutationOptions, useMutation } from '@tanstack/react-query';
import { type AuthError } from 'firebase/auth';
import { signUpService, type LoginServiceParams } from '../api';
import { type User } from '@/entities/user';

export const useSignUpMutation = (
  options?: MutationOptions<User, AuthError, LoginServiceParams>,
) => {
  return useMutation<User, AuthError, LoginServiceParams>(
    (params) => signUpService(params),
    options,
  );
};
