import React from 'react';
import Layout from "./Layout/Layout";
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import TweetsByHashtags from "../Pages/tweetsByHashtags/TweetsByHashtags";
import TweetsByBestTweeters from "../Pages/tweetsByBestTweeters/TweetsByBestTweeters";
import TestPostdetail from "../Pages/TEST/TEST_POSTDETAIL";
import Home from "../Pages/Home/Home";
import TEST from "../Pages/TEST/TEST";
import NotFound404 from "../Pages/404/NotFound404";
import Authentication from "../Pages/Authentication/Authentication";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {TweetProvider} from "../Context/Context";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={'/login'} component={Authentication}/> {/* nemikhaim mesle baghie sidebar va heasder dashte bashe, pas kharej tarif mikonim */}
                    <PrivateRoute path={"/"} render={()=>
                        <TweetProvider>
                            <Layout>     {/* alan vaghti layout baz shod tagesh va Route ha oomade inja, HOC hast, ghesamate 51 film */}
                                <Switch>        {/* swtich miad daghighan doone be doone check mokine, olaviat bandi mikone */}
                                    <Route exact path={'/'} component={Home}/>
                                    <Route exact path={'/hashtags/:clickedHashtag'} component={TweetsByHashtags}/>
                                    <Route exact path={'/users/:id/:name'} component={TweetsByBestTweeters}/>
                                    <Route component={NotFound404}/> {/* age path nadim, oon mooghe age address e ro peida nakone, mire be oon component*/}
                                </Switch>
                            </Layout>
                        </TweetProvider>
                    }/>
                </Switch>
            </BrowserRouter>
            <ToastContainer bodyClassName={'myCustomStyles'} />
        </>
    );
};

// sathe dastresi be karbare login shode/nashode

const isLogin = () =>  !!localStorage.getItem('x-auth-token'); // '!!' yani bia natije kar ro be ma faghat Boolean bede, age getItem ok shod, true bede masalan

const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props)=>{
        if(isLogin())
            return <Redirect to={"/"}/>
        else {
            return React.createElement(component, props);
        }
    }}/>
};

const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props)=>{
        if (isLogin())
            return render(props);
        else
            return <Redirect to={'/login'}/>
    }}/>
}

export default App;