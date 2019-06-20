import * as React from "react";
import styled from "../utils/theme";

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
    return <Wrapper></Wrapper>;
  }
}

export default App;
