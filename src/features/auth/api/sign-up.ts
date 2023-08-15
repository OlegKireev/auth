import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { type User } from '@/entities/user';

export interface SignUpServiceParams {
  username: string;
  password: string;
}

export const signUpService = async (
  user: SignUpServiceParams,
): Promise<User> => {
  const auth = getAuth();
  const response = await createUserWithEmailAndPassword(
    auth,
    user.username,
    user.password,
  );
  return response.user;
};
