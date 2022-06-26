import axios from 'axios';
import { createBrowserHistory } from 'history'

export const DOMAIN = 'https://old-stuff-exchange.azurewebsites.net';

export const history = createBrowserHistory();

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,

    }
    return config;
}, (error) => {
    return Promise.reject(error);
})