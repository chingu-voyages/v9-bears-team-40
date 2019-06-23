import * as React from "react";
import { Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import ResultsPage from "../Pages/ResultsPage";

interface IKey {
  key: string;
}

const Routes = () => (
  <React.Fragment>
    {/*Home*/}
    <Route exact path="/" component={HomePage} />

    {/*Display search results*/}
    <Route path="/s/:general" render={props => <ResultsPage {...props} />} />

    {/*Display one book by ISBN
    <BookPage {...props} />}*/}
    <Route
      path="/b/:isbn"
      render={props => (
        <div>
          Render the BookPage here later (passing a Book from the results page
          or fetching data when it's navigated to directly).
        </div>
      )}
    />
  </React.Fragment>
);

export default Routes;
