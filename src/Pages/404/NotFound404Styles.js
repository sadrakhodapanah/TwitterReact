import { makeStyles } from '@material-ui/core/styles';
import Theme from '../../Components/Theme/Theme.js';

const NotFound404Styles = makeStyles(Theme=>({
    Asli: {
        flex: 1,
        height: '100%',
        backgroundColor: Theme.palette.primary.main,
        overflowY: 'auto' //Post ha ziad shod, beshe scroll kard paein
    },
    Khode404:{
        textAlign: "center",
        fontFamily: 'Brush738',
        fontSize: '10vw',
        color: 'white'
    },
    errorText:{
        textAlign: "center",
        fontSize: '2vw',
        color: 'white',
    }
})
);
export default NotFound404Styles;