import axios from "axios";
import { toast } from 'react-toastify';

export const authAxios = axios.create();
authAxios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("access_token"));
    // console.log(token)
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    document.body.classList.add('loading-indicator');

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  function (successRes) {
    document.body.classList.remove('loading-indicator')
    return successRes;
  },
  function (error) {
    document.body.classList.remove('loading-indicator')
    toast.error(error.response.data.message)
    return Promise.reject(error);
  }
);

const services = {
  authAxios,
};

export default services;
