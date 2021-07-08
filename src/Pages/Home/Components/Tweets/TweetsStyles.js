import { makeStyles } from '@material-ui/core/styles';
import Theme from '../../../../Components/Theme/Theme.js';

const TweetsStyles = makeStyles( Theme=>({
    root: {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: 'white',
        padding: 18,
        marginTop: '0.5rem'
    },
    TweeterName:{
        fontWeight: '350',
    },
    TweeterId: {
        fontSize: 'small',
        color: Theme.palette.text.hint,
        direction: 'rtl'
    },
    TweetText:{
        paddingTop: '1rem',
        textAlign: 'justify',
        fontSize: '0.9rem',
        fontFamily: 'ShabnamB'
    },
    ForwardIcon:{
        backgroundColor: Theme.palette.primary.main,
        transform: 'scale(0.7)',
        paddingTop: '0.2 rem',
        border: '1px solid black'
    },
    LikeIcon:{
        backgroundColor: 'rgb(255,0,0,0.5)',
        transform: 'scale(0.7)',
        paddingTop: '0.2 rem',
        border: '1px solid black'
    },
    LikesCounter:{
        color: Theme.palette.text.hint,
        fontSize: 'small'
    },
    newTweetImg: {
        width: '10rem',
        height: '10rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        paddingLeft: '40%',
    }

  })
);
export default TweetsStyles;