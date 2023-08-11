import {
  type LoginServiceResult,
  loginService,
  type LoginServiceParams,
} from '../api';
import { type MutationOptions, useMutation } from '@/shared';

export const useLoginMutation = (
  options?: MutationOptions<LoginServiceResult>,
) => {
  return useMutation<LoginServiceResult, LoginServiceParams>(
    (params) => loginService(params),
    options,
  );
};
