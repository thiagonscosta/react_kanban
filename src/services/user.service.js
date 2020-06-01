import axios from 'axios';
import { data } from '../config';

const API_BASE_URL = data.baseURL;

export function login(data) {
    return axios.post(API_BASE_URL + '/auth/login', data)
        .then(res => {
            return Promise.resolve(res);
        })
        .catch(err => {
            console.log(err)
        })
}

export function register(data) {
    return axios.post(API_BASE_URL + '/auth/register', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}