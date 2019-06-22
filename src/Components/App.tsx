import * as React from "react";
import styled from "../utils/theme";
//@ts-ignore : installed in docker container
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../routes/routes";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

//App state types
type AppState = {};

class App extends React.Component<{}, AppState> {
  state = {};

  render() {
    return (
      <Router>
        <Wrapper>
          <Routes />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
