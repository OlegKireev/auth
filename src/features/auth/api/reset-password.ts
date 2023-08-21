import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export const resetPasswordService = async (email: string): Promise<any> => {
  const auth = getAuth();
  const loginPageLink = `${window.location.origin}/login`;

  await sendPasswordResetEmail(auth, email, {
    url: loginPageLink,
  });

  return true;
};
