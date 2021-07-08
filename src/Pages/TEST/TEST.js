import React from 'react';
import {Link} from "react-router-dom";

const Test = (props) => {

    const myRouterFunction1=()=>{
        props.history.push('/BestTweeters');
    };

    const myRouterFunction2=()=>{
        props.history.push('/Home');
    };

    const myRouterFunction3=()=>{
        props.history.push('/TrendHashtags');
    };

//ina ba Button, khat 24 ba Link ( vase react-router-dom )


    return (
        <div>
            <button onClick={myRouterFunction1}>بهترین خبرنگاران</button>
            <br/>
            <Link to={"/BestTweeters"} >بهترین خبرنگاران</Link>
            <br/>
            <button onClick={myRouterFunction2}>خانه</button>
            <br/>
            <button onClick={myRouterFunction3}>داغترین توییت ها</button>
            <br/>
            <div>
                <h1>پست اول</h1>
                <p>پست اول پست اول پست اول پست اول پست اول پست اول پست اول </p>
                <Link to={'/TEST/اول'}>جزئیات بیشتر</Link>
            </div>
            <div>
                <h1>پست دوم</h1>
                <p>پست اول پست اول پست اول پست اول پست اول پست اول پست اول </p>
                <Link to={'/TEST/دوم'}>جزئیات بیشتر</Link>
            </div>
            <div>
                <h1>پست سوم</h1>
                <p>پست اول پست اول پست اول پست اول پست اول پست اول پست اول </p>
                <Link to={'/TEST/سوم'}>جزئیات بیشتر</Link>
            </div>
            <div>
                <h1>پست چهارم</h1>
                <p>پست اول پست اول پست اول پست اول پست اول پست اول پست اول </p>
                <Link to={'/TEST/چهارم'} >جزئیات بیشتر</Link>
            </div>

        </div>
    );
};

export default Test;