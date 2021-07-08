import { makeStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';

const RightSideBarStyles = makeStyles ( Theme => ({
    root: {
        width : '18%',
        backgroundColor: 'white',
        padding: '1.5rem 1rem',
        overflowY: "auto",
    },
    logo: {
        width: '3rem',
        height: '3rem'
    },
    twitterFarsi: {
        marginRight: '2rem',
        fontSize: '1.3rem',
        fontFamily: 'ShabnamB',
        color: Theme.palette.primary.main,

    },
    hashtagTitle: {
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '1.3rem',
        fontFamily: 'ShabnamB',
    },
    hashtagCont:{
        marginBottom: '0.5rem',
        marginTop: '0.5rem',
        paddingRight: '1.5rem'
    },
    hashtagIcon: {
        fontWeight: "bold",
        fontSize: 25,
        borderRadius: '50%',
        backgroundColor: Theme.palette.primary.main,
        color: "white",
        paddingLeft: '10px',
        paddingRight: '10px',
        border: 'solid 1px black'
    },
    hashtagDesc: {
        marginRight: '1rem',
        color: Theme.palette.primary.main,
        fontWeight: "bold"
    }
})
);
export default RightSideBarStyles;