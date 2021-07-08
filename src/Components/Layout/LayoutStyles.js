import { makeStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';

const LayoutStyles = makeStyles(Theme=>({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: Theme.palette.text.hint,
    },
    dividerR: {
        width: '1.5px',
        height: '100%',
        backgroundColor: Theme.palette.primary.main
    },
    dividerL: {
        width: '1.5px',
        height: '100%',
        backgroundColor: Theme.palette.primary.main
    },
    mainContent:{
        flex: 1,    // vase inke vaghti vasat component nadarim, leftsidebar va rightsidbar sare jashoon bemoonan, nachasban be ham
        overflowY: 'auto'

    },
    waiting:{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width:'100%',
        height: '100vh'
    }

})
);
export default LayoutStyles;