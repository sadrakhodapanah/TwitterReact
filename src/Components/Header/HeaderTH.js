import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HeaderStylesTH from "./HeaderStylesTH";
import {Divider} from "@material-ui/core";

const HeaderTH = ({title,icon}) => {
    const HeaderStyleClasses= HeaderStylesTH();

    return (
        <div>
            <Grid container direction={'row'} className={HeaderStyleClasses.root} alignItems={'center'}>
                {icon}
                <Typography variant={"h1"} className={HeaderStyleClasses.HomeTitle}>
                    {'#'+title}
                </Typography>
            </Grid>
            <Divider className={HeaderStyleClasses.HeaderDivider}/>
        </div>
    );
};

export default HeaderTH;