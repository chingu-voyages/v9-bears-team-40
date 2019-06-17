import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle, ThemeProvider, theme } from "./utils/theme";

import App from "./Components/App";

import * as serviceWorker from "./serviceWorker";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bree+Serif|Raleway:300&display=swap');
  body {
    color: ${props => props.theme.colors.body};
    font-family: ${props => props.theme.fonts.body};
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4 {
    font-family: ${props => props.theme.fonts.heading};
  }
  h1 {
    font-size: 2rem;
    line-height: 2rem;
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
