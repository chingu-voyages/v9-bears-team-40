import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";

const ThemedApp = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(ThemedApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
