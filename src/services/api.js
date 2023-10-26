import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-back-end-7npi.onrender.com'
})
