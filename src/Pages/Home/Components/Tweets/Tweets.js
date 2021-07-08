import React, {useState} from 'react';
import TweetsStyles from "./TweetsStyles";
import Grid from "@material-ui/core/Grid";
import { Typography} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LoopIcon from '@material-ui/icons/Loop';
import IconButton from "@material-ui/core/IconButton";
import {likeTweet, setTweetText, useTweetDispatch} from "../../../../Context/Context";
import {toast} from "react-toastify";
import {likeTweetRequest} from "../../../../API/API_Tweets";



const Tweets = ({Data2}) => {
    const TweetsStylesClasses = TweetsStyles();

    const tweetDispatch = useTweetDispatch();
    // like button state //
    const [Like,setLike] = useState(0);

    //Tabe Hashtag detector, ba RegExp object (Documentesh to W3school hast https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

    const hashtagDetector = (text) => {
        return {__html: text.replace( /#\S+/g, '<a href="https://www.google.com" style="color: dodgerblue; text-decoration: none"> $& </a>' )};
        /* 1) in ke return ye object barmigardoone ba kelid __html: bekhatere dangerouslySetInnerHTML hast, bayad in modeli bashe
           2) tabe replace 2 ta argoman migire, 2 ta string, ke avali ham mitoone string bashe, ham ye pattern https://www.w3schools.com/jsref/jsref_obj_regexp.asp
           3) pattern formatesh injoorie ke dakhele dota // hast, # yani kalame e ke ba # shoroo she, \S yani non-WhiteSpace char (Metacharacters), + yani kalame hadeaghal ye harf dashte bashe (Quantifiers) pas hashtag khali nemishe, g ham yani global begarde (Modifiers)
           4) '$&' ham be tabe mige, hamoon kalame e ke peida kardi ba pattern ro ye bala e sharesh biar (bendazesh to tag link o rangesh o felan), age chize dg benevisim, oon kalame ro replace mikone
        */
    };

const getImage = () => {
    if(Data2.user.image)
        return Data2.user.image;
    else
        return "/img/user.png";
};

const retweetClick = () => {
    setTweetText(tweetDispatch, Data2.text);
};

const likeIncreament = () => {
    likeTweetRequest(Data2._id,(isOk, Data2)=>{
        if(!isOk)
            return toast.error(Data2);
        likeTweet(tweetDispatch.Data2._id);
    });
};


    return (
        <div className={TweetsStylesClasses.root}>
            <Grid container direction={'column'}>
                <Grid item container>
                    <img src={getImage()} style={{ marginLeft: '1rem', height:60, width:60, borderRadius:'50%',border: '3px solid grey'}}/>
                    <Grid container direction={'column'} style={{width:'max-content'}}>
                        <Typography className={TweetsStylesClasses.TweeterName}>{Data2.user.name}</Typography>
                        <Typography className={TweetsStylesClasses.TweeterId}>{Data2.user.username}</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography dangerouslySetInnerHTML={hashtagDetector(Data2.text)} className={TweetsStylesClasses.TweetText} component={'p'}/>
                    {/* age Data2.theTweet ro mostaghim bendazim beyne tage baz o baste Typo, render nemishe kod va khode kod ro baramoon neshoon mide */}
                    {
                        Data2.image &&
                        <div>
                            <div style={{backgroundImage: `url(${Data2.image})`}} className={TweetsStylesClasses.newTweetImg}/>
                        </div>
                    }
                </Grid>
            </Grid>

            <Grid container direction={'row-reverse'} style={{marginTop: '1rem'}} alignItems={'center'}>

                <Grid item>
                    <IconButton className={TweetsStylesClasses.ForwardIcon} onClick={retweetClick}>
                        <LoopIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton className={TweetsStylesClasses.LikeIcon} onClick={likeIncreament}>
                        <FavoriteIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography className={TweetsStylesClasses.LikesCounter}>{Data2.likes}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Tweets;