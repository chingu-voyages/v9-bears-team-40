import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle, ThemeProvider, theme } from "./utils/theme";

import App from "./Components/App";

import * as serviceWorker from "./serviceWorker";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.body};
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
