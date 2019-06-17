import React from "react";
import styled from "../utils/theme";

import { Header } from "./Header";

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

//App state types
interface AppState {}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default App;
