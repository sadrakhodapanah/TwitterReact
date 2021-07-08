import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import {Button, Grid, Typography} from "@material-ui/core";
import AuthenticationStyles from "./AuthenticationStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Input from "@material-ui/core/Input";
import {toast} from "react-toastify";
import {loginAPI, registerAPI} from "../../API/API_Auth";

const LOGIN_TAB_VALUE = 1;
const REGISTER_TAB_VALUE = 2;

const Authentication = () => {
    const AuthenticationStylesClasses = AuthenticationStyles();

    const [tabSwitcher, setTabSwitcher] = useState(LOGIN_TAB_VALUE); //useState-> safe load shod, aval ro login bashe :P

    // Login states
    const [userNameLogin, setUserNameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();

    // Register states
    const [usernameRegister, setUsernameRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();
    const [fullNameRegister, setFullNameRegister] = useState();
    const [confirmPasswordRegister, setConfirmPasswordRegister] = useState();

    const handleChange = (e,newValue) =>{
        setTabSwitcher(newValue);
    };

    const userLoginValidation = (user) => {
        if (!user.username)  //agar username null bood, vojood nadasht
        return 'فیلد نام کاربری خالی است'
        if (!user.password)
        return 'فیلد کلمه عبور خالی است'
    };

    const handleLogin = ()=> {
        const user= {
            username: userNameLogin,
            password: passwordLogin
        };
        const error = userLoginValidation(user);
        if (error) {
            toast.warn(error);
        }
        loginAPI(user, (Shart, ourData)=>{
            if (!Shart)
            {return toast.error(ourData);}
            else{
                toast.success("با موفقیت وارد شدید");

                //vase inke etelaat to storage moroorgar zakhire beshe, vase valid boodan user masalan
                localStorage.setItem("name", ourData.name);
                localStorage.setItem("image", ourData.image);
                localStorage.setItem("username", ourData.username);
                localStorage.setItem("x-auth-token", ourData["x-auth-token"]);}
            window.location.reload(); //vaghti kare karbar ok shod, safhe ye bar refresh she ke bere be Home
        });
    };

    const userRegisterValidation = (user) => {
        if (!user.name) {
            return 'فیلد نام کامل خالی است';
        }
        if (!user.username) {
            return 'فیلد نام کاربری خالی است';
        }
        if (!user.password) {
            return 'فیلد کلمه عبور خالی است';
        }
        if (user.password !== user.confirmPasswordRegister) {
            return 'کلمه عبور مطابقت ندارد';
        }
    };

    const handleRegister = () => {
        const user = {
            name: fullNameRegister,
            username: usernameRegister,
            password: passwordRegister,
            confirmPasswordRegister: confirmPasswordRegister,
        };
        const error = userRegisterValidation(user);
        if (error) {
            return toast.warn(error);
        }
        user.confirmPasswordRegister = undefined; //in parametr faghat vase taeed hast va too code  mast, to api postman va backend hamchin chizi nadarim, pas bayad badesh hazf beshe
        registerAPI(user, (Shart, ourData)=>{
            if (!Shart)
            {return toast.error(ourData);}
            else{
                toast.success("با موفقیت ثبت نام شدید");

                //vase inke etelaat to storage moroorgar zakhire beshe, vase valid boodan user masalan
                localStorage.setItem("name", ourData.name);
                localStorage.setItem("image", ourData.image);
                localStorage.setItem("username", ourData.username);
                localStorage.setItem("x-auth-token", ourData["x-auth-token"]);}
            window.location.reload(); //vaghti kare karbar ok shod, safhe ye bar refresh she ke bere be Home
        });
    };

    return (
        <div className={AuthenticationStylesClasses.background}>
            <Paper className={AuthenticationStylesClasses.container}>
                <Grid container alignItems={'center'} className={AuthenticationStylesClasses.welcomeText}>
                    <Typography>به توییتر فارسی خوش آمدید!</Typography>
                    <img src={'/img/faveicon.png'} style={{width: '1.5rem', height: '1.5rem', marginRight: '1rem'}}/>
                </Grid>
                <Tabs
                    value={tabSwitcher}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="ورود" value={LOGIN_TAB_VALUE} className={AuthenticationStylesClasses.Tab}/>
                    <Tab label="ثبت نام" value={REGISTER_TAB_VALUE}  className={AuthenticationStylesClasses.Tab}/>
                </Tabs>

                {tabSwitcher === LOGIN_TAB_VALUE &&         //age tab login faal bood, in div ro neshoon bede
                <div className={AuthenticationStylesClasses.inputContainer}>
                    <Typography>نام کاربری:</Typography>
                    <Input style={{marginBottom: '1.5rem'}}
                           value={userNameLogin} onChange={event => setUserNameLogin(event.target.value)}
                    ></Input>
                    <Typography>کلمه عبور:</Typography>
                    <Input style={{marginBottom: '1.5rem'}}
                           value={passwordLogin} onChange={event => setPasswordLogin(event.target.value)}
                    ></Input>
                    <Button variant={'contained'} color={"primary"} onClick={handleLogin}>ورود</Button>
                </div>
                }

                {tabSwitcher === REGISTER_TAB_VALUE &&         //age tab login faal bood, in div ro neshoon bede
                <div  className={AuthenticationStylesClasses.inputContainer}>
                    <Typography>نام کامل:</Typography>
                    <Input style={{marginBottom: '1.5rem'}}
                           value={fullNameRegister} onChange={event => setFullNameRegister(event.target.value)}></Input>
                    <Typography>نام کاربری:</Typography>
                    <Input style={{marginBottom: '1.5rem'}}
                           value={usernameRegister} onChange={event => setUsernameRegister(event.target.value)}></Input>
                    <Typography>کلمه عبور:</Typography>
                    <Input style={{marginBottom: '1.5rem'}}
                           value={passwordRegister} onChange={event => setPasswordRegister(event.target.value)}></Input>
                    <Typography>تکرار کلمه عبور:</Typography>
                    <Input style={{marginBottom: '1.5rem'}}
                           value={confirmPasswordRegister} onChange={event => setConfirmPasswordRegister(event.target.value)}></Input>
                    <Button variant={'contained'} color={"primary"} onClick={handleRegister}>ثبت نام</Button>
                </div>
                }
            </Paper>
        </div>
    );
};

export default Authentication;