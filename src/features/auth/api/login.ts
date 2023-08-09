import { delay } from '@/shared';

export interface LoginServiceParams {
  username: string;
  password: string;
}

export interface LoginServiceResult {
  token: string;
}

export const loginService = async ({
  username,
  password,
}: LoginServiceParams): Promise<LoginServiceResult> => {
  console.log(username, password);

  await delay(2500);
  return Promise.resolve({ token: '123' });
};
