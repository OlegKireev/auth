import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { type User } from '@/entities/user';

export interface LoginServiceParams {
  username: string;
  password: string;
}

export const loginService = async (user: LoginServiceParams): Promise<User> => {
  const auth = getAuth();
  const response = await signInWithEmailAndPassword(
    auth,
    user.username,
    user.password,
  );
  return response.user;
};
