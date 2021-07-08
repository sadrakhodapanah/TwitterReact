import {getAxiosInstanceApi, getAxiosInstanceJsonServer} from "./API";
import axios from "axios";

export const getAllTweets = (callback) => {
    getAxiosInstanceApi().post("getAllTweet")
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
            callback(false, error);
    });
};

export const getTweetsByHashtagRequest = (hashTag,callback) => {
    getAxiosInstanceApi().post("getAllTweet", { hashTag }) // {hashtag} mesle ine ke begim {hashtag : hashtag}
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
            callback(false, error);
    });
};

export const getTweetsByUserRequest = (user,callback) => {
    getAxiosInstanceApi().post("getAllTweet", { user }) // {hashtag} mesle ine ke begim {hashtag : hashtag}
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
            callback(false, error);
    });
};

export const getAllHashtags = (callback) => {
    getAxiosInstanceApi().get("getAllHashTags")
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error);
    });
};

export const getAllUsers = (callback) => {
    getAxiosInstanceApi().get("getAllUser")
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error);
    });
};

export const newTweetRequest = (theObject,callback) => {
    getAxiosInstanceApi().post("newTweet", theObject)
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error);
    });
};

export const likeTweetRequest = (id,callback) => {
    getAxiosInstanceApi().get("likeTweet/" + id)
        .then( response =>{
            const ourData = response.data; //in data sabete esmesh, age inja console log begirim az response, to browser bakhsh haye object response maloom mishan
            callback(true, ourData);
        }).catch( error =>{
        callback(false, error);
    });
};