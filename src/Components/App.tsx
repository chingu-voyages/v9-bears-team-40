import * as React from "react";
import styled from "../utils/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchBar from "./SearchBar";
import Home from "../Pages/Home";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

//App state types
type AppState = {
  search: {
    term: string;
  };
};

class App extends React.Component<{}, AppState> {
  state = {
    search: {
      term: ""
    }
  };

  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/*
            Later, use queryString parsing to search using multiple optional parameters (isbn, author, title, etc), or use match params like below to use an identifier (e.g. isbn)
          */}
          <Route
            path="/b/:isbn"
            render={props => (
              <div>Here is a book with ISBN {props.match.params.isbn}</div>
            )}
          />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
