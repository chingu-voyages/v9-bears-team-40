import * as React from "react";
import { Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookPage from "../Pages/BookPage";

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
    <Route
      path="/b/:general"
      render={props => (
        <BookPage
          search={{
            general: props.match.params.general
          }}
        />
      )}
    />
  </React.Fragment>
);

export default Routes;
