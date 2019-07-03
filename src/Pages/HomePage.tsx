import * as React from "react";
import styled from "../utils/theme";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type HomeProps = {};

const Home: React.FunctionComponent<HomeProps> = props => {
  return (
    <React.Fragment>
      <Main>
        <h1>Home</h1>
        <p>
          Let's refine the style of this page later (no header except auth,
          maybe no footer?) so that the search is presented clearly.
        </p>
      </Main>
    </React.Fragment>
  );
};

export default Home;
