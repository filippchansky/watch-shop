import { privateApi } from "../privateApi"

export const getUser = async () => {
  const res = await privateApi.get('/user')

  return res
}