import React, {useEffect, useRef, useState} from 'react';
import LeftSideBarStyles from "./LeftSideBarStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import StarsIcon from '@material-ui/icons/Stars';
import {Link} from "react-router-dom";
import {ButtonBase} from "@material-ui/core";
import axios from "axios";
import {getAllUsers} from "../../API/API_Tweets";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {uploadUserPhoto} from "../../API/API_Auth";
import {toast} from "react-toastify";

const LeftSideBar = ({name,id,img}) => {
    const LeftSideBarStylesClass =LeftSideBarStyles();

    const [Tweeters,setTweeters]= useState([]);
    const [imageFile,setImageFile]= useState();
    const [imagePath,setImagePath]= useState();
    const [anchorMenu,setAnchorMenu]= useState();
    const inputRef = useRef();

    useEffect(()=>{
        getAllUsers((Shart,ourData)=>{
            if(!Shart) {
                return toast.error("خطا در لود خبرنگاران");
            }
            else {
                setTweeters(ourData);
            }
        });
    },[]);

    const handleAnchorMenu = (event) => {
        if(anchorMenu)
            setAnchorMenu(null);
        else
            setAnchorMenu(event.currentTarget);

    };

    const getImage= () => {
        if(imagePath)
            return imagePath;
        if(localStorage.getItem('image') && localStorage.getItem('image')!=='undefined ')
            return localStorage.getItem('image');
        else
            return "/img/profile.png";
    };

    const getImageTopTweeters= (image) => {
        if(image)
            return image ;
        else
            return "/img/user.png";
    };

    const handleProfilePicChange = (event) => {
        if (event.target.files && event.target.files.length > 0){
            setImageFile(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePath(event.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            const formData = new FormData();
            formData.append("image",event.target.files[0]);
            uploadUserPhoto(formData,(isOk,data)=>{
                if(!isOk)
                    return toast.error(data);
                toast.success('عکس شما با موفقیت آپلود شد');
                localStorage.setItem('image',data.imagePath);
            });

        }

    };

    return (
        <div className={LeftSideBarStylesClass.root}>

            <Grid container direction={"row-reverse"} onClick={handleAnchorMenu} style={{cursor: 'pointer'}} style={{border: '1px solid #d7dadc',borderRadius: '30%', padding: '20px', backgroundColor: '#f5f8fa'}}>
                <Grid item>
                    <img src={getImage()} style={{width: 75, height: 75, borderRadius: '50%',border: '3px double grey'}}/>
                </Grid>
                <Grid item container direction={"column"} className={ LeftSideBarStylesClass.profileText }>
                    <Grid item direction={"column"}>
                        <Typography className={LeftSideBarStylesClass.profileName}>{localStorage.getItem('name')}</Typography>
                    </Grid>
                    <Grid item direction={"column"}>
                    <Typography className={LeftSideBarStylesClass.profileId}>{'@'+localStorage.getItem('username')}</Typography>
                    </Grid>
                </Grid>
                <input ref={inputRef} type={'file'} style={{display: 'none'}} onChange={handleProfilePicChange}/>
            </Grid>

            <Grid item container direction={"column"} className={LeftSideBarStylesClass.topTweeters}>
                <Grid container>
                    <Typography style={{fontFamily: 'ShabnamB'}}>
                        بهترین خبرنگاران
                    </Typography>
                    <StarsIcon style={{color: 'gold',marginRight: '0.5rem'}}/>
                </Grid>

                <Divider style={{margin: '8px -24px 0px -24px'}}/>

                {
                    Tweeters.map((element, index) => {
                        return (   //nemishe ham Grid bashe, poshtsaresh Divider, faghat 1 parent bayad bashe, miyaym az fragment estefade mikonim, HICH tag html e ijad nemikone, kholase taresh ham ine <></>
                            <React.Fragment>
                                <ButtonBase>
                                    <Link to={`/users/${element._id}/${element.name}`} style={{textDecoration: 'none', width: '100%'}}>
                                        <Grid container style={{margin: '0.5rem 0rem 0.5rem 0rem'}}>
                                            <img src={getImageTopTweeters(element.image)} style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
                                            <Grid item container direction={"column"}
                                                  className={LeftSideBarStylesClass.topTweetersInfo}>
                                                <Typography
                                                    className={LeftSideBarStylesClass.profileNameTT}> {element.name} </Typography>
                                                <Typography
                                                    className={LeftSideBarStylesClass.profileIdTT}> {element.username} </Typography>
                                            </Grid>
                                        </Grid>
                                        {
                                            index !== Tweeters.length - 1 &&  // vase inke baraye akharin onsor, divider nandaze
                                            <Divider style={{margin: '8px -24px 0px -24px'}}/>
                                        }
                                    </Link>
                                </ButtonBase>
                            </React.Fragment>
                        )
                    },)
                }
            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={()=> setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={()=>{ localStorage.clear(); window.location.reload()}}>
                    خروج
                </MenuItem>
                <MenuItem onClick={()=>{ inputRef.current.click()}}>
                    ویرایش عکس پروفایل
                </MenuItem>
            </Menu>
        </div>
    );
};

export default LeftSideBar;