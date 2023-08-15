import { signUpService, type LoginServiceParams } from '../api';
import { type User } from '@/entities/user';
import { type MutationOptions, useMutation } from '@/shared';

export const useSignUpMutation = (options?: MutationOptions<User>) => {
  return useMutation<User, LoginServiceParams>(
    (params) => signUpService(params),
    options,
  );
};
