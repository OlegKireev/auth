import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { type User } from '@/entities/user';

const googleAuthProvider = new GoogleAuthProvider();

export const loginByGoogleService = async (): Promise<User> => {
  const auth = getAuth();
  const response = await signInWithPopup(auth, googleAuthProvider);
  return response.user;
};
