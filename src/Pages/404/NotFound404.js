import React from 'react';
import NotFound404Styles from './NotFound404Styles';
import {Grid, Typography} from "@material-ui/core";

const NotFound404 = () => {
    const NotFound404StylesClasses = NotFound404Styles();
    return (
        <div className={NotFound404StylesClasses.Asli}>
           <Grid container direction={"column"} style={{paddingTop: '30%'}}>
               <Typography className={NotFound404StylesClasses.Khode404}>404</Typography>
               <Typography className={NotFound404StylesClasses.errorText}>صفحه های که به دنبال آن هستید، وجود ندارد</Typography>
           </Grid>
        </div>
    );
};

export default NotFound404;