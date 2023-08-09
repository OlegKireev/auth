import {
  type LoginServiceResult,
  loginService,
  type LoginServiceParams,
} from '../api';
import { useMutation } from '@/shared';

export const useLoginMutation = () => {
  return useMutation<LoginServiceResult, LoginServiceParams>((params) =>
    loginService(params),
  );
};
