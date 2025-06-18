import axios, { AxiosResponse } from "axios";
import { publicApi } from "../publicApi";

interface IBody {
  username: string;
  password: string;
}

export const signUp = async (email: string, password: string): Promise<AxiosResponse<string>> => {
  const res = await publicApi.post<string>("/auth/signup", {
    username: email,
    password
  } as IBody);

  return res;
};
