// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import history from "./history";
import store from "./store";
import App from "./app";

// import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles/";
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

const theme = createMuiTheme({ palette: { type: "dark" } });

ReactDOM.render(
  <Provider store={store}>
    {/* <MuiThemeProvider theme={theme}> */}

    <App />

    {/* </MuiThemeProvider> */}
  </Provider>,
  document.getElementById("app")
);
