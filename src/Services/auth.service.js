import axios from "axios";
export const authAxios = axios.create();
authAxios.interceptors.request.use(
    config => {
        const token = JSON.parse(localStorage.getItem('access_token'));
        // console.log(token)
        if (token) {
            config.headers.Authorization = "Bearer " + token
           
        }
        
        return config
    },
    error => {
        return Promise.reject(error)
    }
);
const services = {
    authAxios
};

export default services;