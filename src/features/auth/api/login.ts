import { delay } from '@/shared';

export interface LoginServiceParams {
  username: string;
  password: string;
}

export interface LoginServiceResult {
  token: string | null;
}

const USERS_DB: LoginServiceParams[] = [
  {
    username: 'admin',
    password: 'admin',
  },
  {
    username: 'user',
    password: 'user',
  },
];

const loginController = async (
  user: LoginServiceParams,
): Promise<LoginServiceResult> => {
  const foundUser = USERS_DB.find(
    (dbUser) => dbUser.username === user.username,
  );
  const isPasswordCorrect = foundUser?.password === user.password;

  await delay(500);

  if (!foundUser || !isPasswordCorrect) {
    return Promise.reject(new Error('Incorrect username or password'));
  }

  return Promise.resolve({
    token: Math.random().toString(),
  });
};

export const loginService = async (
  user: LoginServiceParams,
): Promise<LoginServiceResult> => {
  const response = await loginController(user);
  return response;
};
