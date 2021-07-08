import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import RightSideBarStyles from './RightSideBarStyles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import {Link} from "react-router-dom";
import axios from "axios";
import {getAllHashtags} from "../../API/API_Tweets";
import {topHashtagsInstantUpdate,useTweetDispatch,useTweetState} from "../../Context/Context";

const RightSideBar = () => {

    const RightSideBarStylesClass = RightSideBarStyles()

    const {hashTags} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    // const [hashtags,setHashtags]= useState([]);

    useEffect(()=>{
        getAllHashtags((Shart,ourData)=>{
            if(!Shart) {
                return alert("خطا در لود هشتگ ها");
            }
            else {
                topHashtagsInstantUpdate(tweetDispatch,ourData);
            }
        });
    },[]);


    return (
        <div className={ RightSideBarStylesClass.root }>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <Grid container alignItems={'center'}>
                    <Grid item>
                        <img src = {"/img/faveicon.png"} className={ RightSideBarStylesClass.logo } />
                    </Grid>
                    <Grid item>
                        <Typography className = { RightSideBarStylesClass.twitterFarsi } >
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>
            </Link>

            <Typography className = { RightSideBarStylesClass.hashtagTitle }>
               داغ ترین هشتگ ها
            </Typography>

            <Grid container direction={"column"}>
                {
                    hashTags.map(element=>
                        <ButtonBase>
                            <Link to={'/hashtags/' + element.text} style={{width: '100%'}}>
                                <Grid container direction={"row"} alignItems={'center'} className={RightSideBarStylesClass.hashtagCont}>
                                    <div>
                                        <Typography className = {RightSideBarStylesClass.hashtagIcon}>#</Typography>
                                    </div>
                                    <Typography className = {RightSideBarStylesClass.hashtagDesc}>
                                        {element.text}
                                    </Typography>
                                </Grid>
                            </Link>
                        </ButtonBase>
                    )
                }
            </Grid>
        </div>
    );
};

export default RightSideBar;