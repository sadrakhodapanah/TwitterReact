import { makeStyles } from '@material-ui/core/styles';
import Theme from '../../../../Components/Theme/Theme.js';

const NewTweetStyles = makeStyles(Theme=>({
    root: {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: 'white',
        padding: 18
    },
    TweetInput: {
        flex: 1,
          border: 'none',
          outline: 'unset',
          resize: 'none',
        marginRight: '1rem',
        height: "auto",
        fontFamily: 'Shabnam',
    },
    TweetButton: {
        backgroundColor: Theme.palette.primary.main,
        fontFamily: 'Shabnam',
        borderRadius: 45,
        padding: '0.2rem 1.8rem 0.2rem 1.8rem',
        fontSize: "large",
        color: 'white',
        border: '1px solid black'
    },
    InsertPhoto:{
        transform: 'scale(0.75)',
        border: '1px solid black',
        backgroundColor: 'rgb(0,163,144,0.8)'

    },
    newTweetImg:{
        width: '10rem',
        height: '10rem',
        marginTop: '1rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'

    }
}));
export default NewTweetStyles;