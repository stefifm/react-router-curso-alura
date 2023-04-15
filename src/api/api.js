import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://petshop-api-z9pt.onrender.com'
})

export const search = async (url, setData) => {
  const response = await api.get(url)
  setData(response.data)
}