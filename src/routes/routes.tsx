import * as React from "react";
import { Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import ResultsPage from "../Pages/ResultsPage";
import BookPage from "../Pages/BookPage";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

interface IKey {
  key: string;
}

//going to add a state for header component.
//header component is going to receive props from here to see if user is logged in or not
class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/*Home*/}
        <Route exact path="/" component={HomePage} />

        {/*Display search results*/}
        <Route
          path="/s/:general"
          render={props => <ResultsPage {...props} />}
        />

        {/*Display one book by ISBN
        <BookPage {...props} />}*/}
        <Route path="/b/:isbn" render={props => <BookPage {...props} />} />
      </React.Fragment>
    );
  }
}

export default Routes;
