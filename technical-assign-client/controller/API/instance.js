/* eslint-disable no-undef */
require('dotenv').config()
import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_APP || 'http://localhost:3011',
  baseURL: 'http://localhost:3011',
})

export default axiosInstance
