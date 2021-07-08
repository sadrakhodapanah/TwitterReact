import { makeStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';

const LeftSideBarStyles = makeStyles (Theme => ({
    root: {
        width : '25%',
        backgroundColor: 'white',
        padding: '1.5rem 2rem',
        overflowY: 'auto'
    },
    profileText: {
        marginLeft:'0.5rem',
        width: 'max-content',
        direction: "ltr",
        fontFamily: 'Shabnam'
    },
    profileName:{
        flex: 1,
        paddingTop: '12%',
        paddingLeft: '10%',
        fontSize: 'large',
        width: 'max-content'
    },
    profileId:{
        flex: 1,
        fontSize: 'small',
        color: Theme.palette.text.hint,
        paddingLeft: '10%'
    },
    profileNameTT:{
        flex: 1,
        fontSize: 'large',

    },
    profileIdTT:{
        flex: 1,
        fontSize: 'small',
        color: Theme.palette.text.hint,
    },
    topTweeters:{
        backgroundColor: '#f5f8fa',
        marginTop: '3rem',
        borderRadius: '2.5rem',
        padding: "11px 24px",
    },
    topTweetersInfo: {
        marginRight:'1rem',
        width: 'max-content',
        alignItems: 'flex-start'
    }

    })
);
export default LeftSideBarStyles;