import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import TweetsList from "../Home/Components/TweetsList/TweetsList";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import {toast} from "react-toastify";
import {getTweetsByHashtagRequest} from "../../API/API_Tweets";
import {setTweetslist, useTweetDispatch, useTweetState} from "../../Context/Context";
import {useLocation} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import HeaderTH from "../../Components/Header/HeaderTH";


const TweetsByHashtags = (props) => {

    const {tweetList} = useTweetState();
    const tweetListDispatch = useTweetDispatch();
    //const [allTweets,setAllTweets]= useState([]);
    const Location = useLocation();

    useEffect(()=>{
        getTweetsByHashtagRequest(props.match.params.clickedHashtag ,(isOk, data)=>{
            if(!isOk)
                return toast.error(data);
            setTweetslist(tweetListDispatch,data);

        })
    }, [Location]);

    return (
        <div style={{backgroundColor: '#5ea9dd'}}>
            <HeaderTH title={props.match.params.clickedHashtag}/>
            <TweetsList Data={tweetList}/>
        </div>
    );
};

export default TweetsByHashtags;