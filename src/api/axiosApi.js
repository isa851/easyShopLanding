import axios from "axios";
import { BASE_URL } from "./baseUrl";
import i18n from "../i18n/i18n";

const axiosApi = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosApi.interceptors.request.use((config) => {
  const lang = i18n.language;
  config.headers["Accept-Language"] = lang;
  config.baseURL = `${BASE_URL}/api/v1/`;
  return config;
});

export default axiosApi;