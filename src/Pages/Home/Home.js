import React, {useState} from 'react';
import HomeStyles from "./HomeStyles";
import Header from "../../Components/Header/Header";
import NewTweet from "./Components/NewTweet/NewTweet";
import TweetsList from "./Components/TweetsList/TweetsList";
import HomeIcon from "@material-ui/icons/Home";
import {useEffect} from 'react';
import axios from 'axios';
import {getAllTweets} from "../../API/API_Tweets";
import SearchBar from "./Components/SearchBar/SearchBar";
import {setTweetslist, useTweetDispatch, useTweetState} from "../../Context/Context";

const Home = () => {

    const HomeStyleClasses = HomeStyles();

    const {tweetList: allTweets} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    //const [allTweets,setAllTweets]= useState([]);

    useEffect(()=>{
        updateTweets();
    },[]);

    const updateTweets =()=>{
        getAllTweets((Shart,ourData)=>{
            if(!Shart) {
                return alert("خطا در لود توییت ها");
            }
            else {
                setTweetslist(tweetDispatch,ourData);
            }
        });
    };


    return (
        <div className={HomeStyleClasses.root}>
            <Header icon={<HomeIcon/>} title={'خانه'}/>
            <NewTweet updateTweets={updateTweets}/>
            <TweetsList Data={allTweets}/>
        </div>
    );
};

export default Home;