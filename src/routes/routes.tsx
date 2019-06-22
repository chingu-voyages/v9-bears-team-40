import * as React from "react";
import { Route } from "react-router-dom";

import Home from "../Pages/Home";

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route
      path="/b/:isbn"
      render={props => (
        <div>Here is a book with ISBN {props.match.params.isbn}</div>
      )}
    />
  </React.Fragment>
);

export default Routes;
