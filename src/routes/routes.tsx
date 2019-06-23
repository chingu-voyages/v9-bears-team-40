import * as React from "react";
import { Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookPage from "../Pages/BookPage";

interface IKey {
  key: string;
}

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
    <Route
      path="/b/:general"
      render={props => (
        <BookPage {...props} key={props.match.params.general}></BookPage>
      )}
    />
  </React.Fragment>
);

export default Routes;
