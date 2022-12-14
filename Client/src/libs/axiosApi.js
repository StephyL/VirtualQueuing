import axios from "axios";
import { API_URI } from "../constant";

const AxiosApi = axios.create({
  baseURL: `${API_URI}`,
});

export const axiosGet = (url, config) => AxiosApi.get(url, config);

export default AxiosApi;
