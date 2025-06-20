import { AxiosResponse } from 'axios';
import { privateApi } from '../privateApi';
import { publicApi } from '../publicApi';

interface IBody {
  username: string;
  password: string;
}

export const signIn = async (
  username: string,
  password: string
): Promise<{ token: string }> => {
  const res = await publicApi.post('/auth/login', {
    username,
    password,
  } as IBody);

  return res.data;
};
