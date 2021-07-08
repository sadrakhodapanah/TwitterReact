import React from 'react';
import {Link} from "react-router-dom";

const TestPostdetail = (props) => {
    return (
        <div>
            <div>
                <h1>پست {props.match.params.myid}</h1> {/* shomare post dynamic beshe , chizi ke too jaye myid bayad benevisim hamoonie ke too Layout jaye :myid neveshtim */}
                <p>پست اول پست اول پست اول پست اول پست اول پست اول پست اول </p>
                <Link to={'/'}>جزئیات بیشتر</Link>
            </div>
        </div>
    );
};

export default TestPostdetail;