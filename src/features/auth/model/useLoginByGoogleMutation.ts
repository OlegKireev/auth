import { type MutationOptions, useMutation } from '@tanstack/react-query';
import { type AuthError } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { loginByGoogleService } from '../api/loginByGoogle';
import { type User } from '@/entities/user';

export const useLoginByGoogleMutation = (
  options?: MutationOptions<User, AuthError>,
) => {
  const navigate = useNavigate();
  return useMutation<User, AuthError>(loginByGoogleService, {
    ...options,
    onSuccess: () => {
      navigate('/');
    },
  });
};
