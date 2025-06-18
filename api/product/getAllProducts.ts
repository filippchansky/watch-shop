import { publicApi } from "../publicApi"

export const getAllProducts = async () => {
  const res = await publicApi.get('/products')
}