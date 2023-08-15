import { loginService, type LoginServiceParams } from '../api';
import { type User } from '@/entities/user';
import { type MutationOptions, useMutation } from '@/shared';

export const useLoginMutation = (options?: MutationOptions<User>) => {
  return useMutation<User, LoginServiceParams>(
    (params) => loginService(params),
    options,
  );
};
