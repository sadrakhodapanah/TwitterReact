import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HeaderStyles from "./HeaderStyles";
import {Divider} from "@material-ui/core";

const Header = ({title,icon}) => {
    const HeaderStyleClasses= HeaderStyles();

    return (
        <div>
            <Grid container direction={'row'} className={HeaderStyleClasses.root} alignItems={'center'}>
                {icon}
                <Typography variant={"h1"} className={HeaderStyleClasses.HomeTitle}>
                    {title}
                </Typography>
            </Grid>
            <Divider className={HeaderStyleClasses.HeaderDivider}/>
        </div>
    );
};

export default Header;