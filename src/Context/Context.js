import React from "react";
import {getAllHashtags} from "../API/API_Tweets";

var TweetStateContext = React.createContext();
var TweetDispatchContext = React.createContext();

function TweetReducer (state,action){
    switch (action.type) {
        case "SET_TWEET_TEXT":
            return {...state, tweetText: action.payload}; // hame jaye oon state hamoon bashe, faghat tweetText ba in moshakhast jadid overwite beshe
        case "SET_TWEETS_LIST":
            return {...state, tweetList: action.payload};
        case "INSTANT_UPDATE":
            return {...state, hashTags: action.payload};
        case "LIKE_TWEET":
            const tweetId = action.payload;
            const ourRequiredIndex = state.tweetList.findIndex(item => item._id === tweetId);
            if(ourRequiredIndex === -1)
                return state;
            else
                return {...state , tweetList: [...state.tweetList.slice(0,ourRequiredIndex) , {...state.tweetList[ourRequiredIndex], likes: state.tweetList[ourRequiredIndex].likes+1} , ...state.tweetList.slice( ourRequiredIndex + 1)]};
        default:
        {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function TweetProvider({children}) {
    var [state,dispatch] = React.useReducer(TweetReducer, {
        tweetText: '',
        tweetList: [],
        hashTags: []
    });
    return(
        <TweetStateContext.Provider value={state}>
            <TweetDispatchContext.Provider value={dispatch}>
                {children}
            </TweetDispatchContext.Provider>
        </TweetStateContext.Provider>
    );
}

function useTweetState() {
    var context = React.useContext(TweetStateContext)
    if (context === undefined) {
        throw new Error("useTweetState must be used whitin a TweetProvider");
    }
    return context;
}

function useTweetDispatch() {
    var context = React.useContext(TweetDispatchContext)
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used whitin a TweetProvider");
    }
    return context;
}

export {TweetProvider,useTweetState,useTweetDispatch,setTweetText,Retweet,likeTweet,setTweetslist,topHashtagsInstantUpdate,updateHashtagsListViaNewTweet}

// ----------------------------------------------- //

function setTweetText(dispatch,tweetText){
    dispatch({
        type: 'SET_TWEET_TEXT',
        payload: tweetText
    })

}

function Retweet(dispatch,tweetText){
    dispatch({
        type: 'SET_TWEET_TEXT',
        payload: tweetText
    })

}


function likeTweet(dispatch,id){
    dispatch({
        type: 'LIKE_TWEET',
        payload: id
    })

}

function setTweetslist(dispatch,list){
    dispatch({
        type: 'SET_TWEETS_LIST',
        payload: list
    })

}

function topHashtagsInstantUpdate(dispatch,list){
    dispatch({
        type: 'INSTANT_UPDATE',
        payload: list
    })
}
function updateHashtagsListViaNewTweet(dispatch){
    getAllHashtags((isOk,data)=>{
        if(isOk){
            dispatch({
                type: 'INSTANT_UPDATE',
                payload: data
            })
        }
    })

}