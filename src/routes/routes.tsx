import * as React from "react";
import { Route } from "react-router-dom";

import Home from "../Pages/Home";
import Book from "../Pages/Book";

const Routes = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route
      path="/b/:isbn"
      render={props => (
        <Book
          search={{
            isbn: props.match.params.isbn
          }}
        />
      )}
    />
  </React.Fragment>
);

export default Routes;
