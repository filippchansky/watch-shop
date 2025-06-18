import { AxiosResponse } from "axios";
import { privateApi } from "../privateApi"


interface IBody {
  username: string;
  password: string;
}

export const signIn = async (username: string, password: string): Promise<AxiosResponse<string>> => {
  const res = await privateApi.post('/auth/login', {
    username,
    password
  } as IBody)

  return res.data
}