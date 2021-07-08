import axios from 'axios';

export const getAxiosInstanceJsonServer = () => {

    return axios.create({
        baseURL: 'http://localhost:3000/',
        headers: {
            API_KEY: '09090909'
        }
    });
};

export const getAxiosInstanceReal = () => {

    return axios.create({
        baseURL: 'https://twitterapi.liara.run/api/',
        headers: {
            //API_KEY: '09090909'
        }
    });
};
export const getAxiosInstanceApi = () => {

    return axios.create({
        baseURL: 'https://twitterapi.liara.run/api/',
        headers: {
            'x-auth-token': localStorage.getItem('x-auth-token')
        }
    });
};