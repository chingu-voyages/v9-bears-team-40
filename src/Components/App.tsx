import React from "react";
import styled from "../utils/theme";

import { Header } from "./Header";
import { Footer } from "./Footer";
import SearchBar from "./SearchBar.js";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
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
      <Wrapper>
        <Header />
        <Main>
          <SearchBar />
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
