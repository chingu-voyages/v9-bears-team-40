import * as React from "react";
import { Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookPage from "../Pages/BookPage";

interface IKey {
  key: string;
}

const Routes = () => (
  <React.Fragment>
    {/*Home*/}
    <Route exact path="/" component={HomePage} />

    {/*Display search results*/}
    <Route path="/b/:general" render={props => <BookPage {...props} />} />
  </React.Fragment>
);

export default Routes;
