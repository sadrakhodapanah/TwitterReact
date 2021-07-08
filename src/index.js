import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/App";
import './index.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Theme from './Components/Theme/Theme';
import "./fonts/Shabnam-Bold-FD.woff";
import "./fonts/Shabnam-FD.woff";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);
