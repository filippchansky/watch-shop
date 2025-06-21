import { IUser } from '@/models';
import { privateApi } from '../privateApi';

export const getUser = async (): Promise<IUser> => {
  const res = await privateApi.get('/user');

  return res.data;
};
