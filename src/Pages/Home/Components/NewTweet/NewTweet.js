import React, {useState} from 'react';
import NewTweetStyles from "./NewTweetStyles";
import Grid from "@material-ui/core/Grid";
import {IconButton} from "@material-ui/core";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import {newTweetRequest} from "../../../../API/API_Tweets";
import {toast} from "react-toastify";
import {updateHashtagsListViaNewTweet, useTweetDispatch, useTweetState} from "../../../../Context/Context";
import {setTweetText as setTweet} from "../../../../Context/Context";

const NewTweet = ({updateTweets}) => {
    const NewTweetStylesClasses = NewTweetStyles();
    const inputFile = React.useRef();

    const { tweetText : tweet } = useTweetState();
    const tweetDispatch = useTweetDispatch();
    const [imageFile,setImageFile] = useState();
    const [imagePath,setImagePath] = useState();

    const sendTweet = () => {
        const TWEET = tweet;
        if (!TWEET){
            alert("متن توییت خالی است.");
        }
        else {
            const formData = new FormData();
            formData.append('text',TWEET);
            if (imageFile)
                formData.append('image',imageFile);

            newTweetRequest(formData, (Shart) =>{
                if (!Shart) {
                    return toast.error("ناموفق");
                }
                else {
                    toast.success("توییت موفقیت آمیز");
                    updateTweets();
                    setTweet(tweetDispatch, "");
                    setImagePath();
                    setImageFile();
                    if(TWEET.includes("#"))
                        updateHashtagsListViaNewTweet(tweetDispatch);
                }
            });

        }
    };

    const getImage= () => {
        if(localStorage.getItem('image') && localStorage.getItem('image')!=='undefined ')
            return localStorage.getItem('image');
        else
            return "/img/MyProfile.png";
    };

    const selectImg = () => {
        inputFile.current.click();
    };

    const onChangeImg = (e) =>{
        if(e.target.files && e.target.files.length>0){
            setImageFile(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className={NewTweetStylesClasses.root}>
            <Grid container>
                <Grid item >
                    <img src={getImage()} style={{width:'60px', height:'60px', borderRadius: '50%',border: '3px solid grey'}} />
                </Grid>
                <input placeholder={'توییت کن..!'} className={NewTweetStylesClasses.TweetInput} value={tweet} onChange={e=>setTweet(tweetDispatch,e.target.value)}/>
            </Grid>
            {
                imagePath &&
                <div>
                    <div style={{backgroundImage: `url(${imagePath})`}} className={NewTweetStylesClasses.newTweetImg}></div>
                </div>
            }
            <Grid container direction={'row-reverse'} style={{marginTop: '1rem'}} alignItems={'center'}>
                <Grid item>
                    <IconButton variant={"contained"} className={NewTweetStylesClasses.TweetButton} onClick={sendTweet}>توییت کن!</IconButton>
                </Grid>
                <Grid item>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        type="file"
                        ref={inputFile}
                        onChange={onChangeImg}
                    />

                    <IconButton variant="raised" component="span" className={NewTweetStylesClasses.InsertPhoto} onClick={selectImg}>
                        <InsertPhotoIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default NewTweet;