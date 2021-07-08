import Theme from "../../Components/Theme/Theme";
import {makeStyles} from "@material-ui/core";

const AuthenticationStyles = makeStyles (Theme=>({
        container: {
            backgroundColor: "white",
            width: '30rem',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '1rem',
            position: "absolute",
            borderRadius: '5%',
            border: '2px solid #d7dadc',
            margin: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        welcomeText: {
            fontFamily: 'ShabnamB',
            margin: '1rem 0rem 1rem 0rem',
            textAlign: 'center',
            justifyContent: 'center'
        },
        Tab: {
            flex: 1
        },
        inputContainer:{
            display: "flex",
            flexDirection: "column",
            padding: '1rem 6rem'
        },
        background: {
            backgroundImage: `url('../../../img/loginBackground.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh'
        }
    })
);
export default AuthenticationStyles;