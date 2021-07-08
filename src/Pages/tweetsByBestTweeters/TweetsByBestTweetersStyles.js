import { makeStyles } from '@material-ui/core/styles';
import Theme from "../../Components/Theme/Theme";

const LeftSideBarStyles = makeStyles (Theme => ({
        root: {
            backgroundColor: Theme.palette.primary.main,
            textAlign: "center",
            fontSize: 35,
            color: "white",
            height: '16rem',
            paddingTop: '30%',

        }
    })
);
export default LeftSideBarStyles;