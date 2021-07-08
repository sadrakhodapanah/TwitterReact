import React from 'react';
import Tweets from '../Tweets/Tweets';

const TweetsList = ({Data}) => {

    return (
        <div>
            {Data.map(Element=>
                    <Tweets Data2={Element}/>
                )
            }
        </div>
    );
};

export default TweetsList;