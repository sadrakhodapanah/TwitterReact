import {getAxiosInstanceApi, getAxiosInstanceReal} from "./API";
import axios from "axios";

export const loginAPI = (user,callback) => {
    getAxiosInstanceReal().post("login" , user)
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
            callback(false, error.response.data.message);
    });
};
export const registerAPI = (user,callback) => {
    getAxiosInstanceReal().post("register" , user)
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error.response.data.message);
    });
};
export const uploadUserPhoto = (photo,callback) => {
    getAxiosInstanceApi().post("uploadUserPhoto" , photo)
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error.response.data.message);
    });
};
export const getProfileRequest = (callback) => {
    getAxiosInstanceApi().get("getProfile")
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error.response.data.message);
    });
};


