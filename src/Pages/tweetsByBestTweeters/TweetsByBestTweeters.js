import React, {useEffect, useState} from 'react';
import TweetsList from "../Home/Components/TweetsList/TweetsList";
import Header from "../../Components/Header/Header";
import StarsIcon from '@material-ui/icons/Stars';
import axios from "axios";
import {getAllTweets, getTweetsByUserRequest} from "../../API/API_Tweets";
import {useLocation} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import TweetsByBestTweetersStyles from "./TweetsByBestTweetersStyles";

const TweetsByBestTweeters = (props) => {

    const TweetsByBestTweetersStylesClasses = TweetsByBestTweetersStyles();

    const [allTweets,setAllTweets]= useState([]);
    const Location = useLocation();

    useEffect(()=>{
        getTweetsByUserRequest(props.match.params.id,(Shart,ourData)=>{
            if(!Shart) {
                return alert(ourData.message);
            }
            else {
                setAllTweets(ourData);
            }
        });
    },[Location]);

    return (
        <div style={{backgroundColor: 'gold'}}>
            <Header title={props.match.params.name} icon={<StarsIcon style={{color: 'gold'}}/>} />
            {
                allTweets.length === 0 && //age karbar aslan tweeti nakarde bood, bia in typography ro ijad kon
                    <Typography className={TweetsByBestTweetersStylesClasses.root}>این کاربر هیچ توییتی ارسال نکرده است</Typography>
            }
            <TweetsList Data={allTweets}/>
        </div>
    );
};

export default TweetsByBestTweeters;