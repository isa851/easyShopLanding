import axios from 'axios';
import { BASE_URL } from "./baseUrl";

const axiosApi = axios.create({
  baseURL: `${BASE_URL}/ru/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});


export {axiosApi};