import React, {useEffect, useState} from 'react';
import RightSideBar from "../rightSideBar/RightSideBar";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import LayoutStyles from "./LayoutStyles";
import Divider from "@material-ui/core/Divider";
import Home from "../../Pages/Home/Home";
import TweetsByHashtags from "../../Pages/tweetsByHashtags/TweetsByHashtags";
import TweetsByBestTweeters from "../../Pages/tweetsByBestTweeters/TweetsByBestTweeters";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import TEST from "../../Pages/TEST/TEST";
import TestPostdetail from "../../Pages/TEST/TEST_POSTDETAIL";
import NotFound404 from "../../Pages/404/NotFound404";
import {getProfileRequest} from "../../API/API_Auth";
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom';
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Layout = (props) => {
    const layoutStylesClass = LayoutStyles();
    const history = useHistory();
    const [wait,setWait] = useState();

    useEffect(()=>{
        getProfileRequest((isOk,ourData)=>{
            if(!isOk){
                toast.error(ourData);
                localStorage.clear();
                return history.push("/login");
            };
            setWait(false);
            localStorage.setItem("name", ourData.name);
            localStorage.setItem("image", ourData.image);
            localStorage.setItem("username", ourData.username);
            localStorage.setItem("x-auth-token", ourData["x-auth-token"]);
        });
    },[]);
    if(wait) {
        return <div className={layoutStylesClass.waiting}>
            <CircularProgress/>
            <Typography>شکیبا باشید</Typography>
        </div>
    }
    else
        return (
            <div className={ layoutStylesClass.root }>
                <RightSideBar/>
                <Divider orientation = {"vertical"} className={layoutStylesClass.dividerR}/>
                <div className={layoutStylesClass.mainContent}>
                    {props.children}
                </div>
                <Divider orientation = {"vertical"} className={layoutStylesClass.dividerL}/>
                <LeftSideBar/>
            </div>
        );
    };

export default Layout;