import * as React from "react";
import styled from "../utils/theme";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
      <Header />
      <Main>
        <h1>Home</h1>
        <p>
          Let's refine the style of this page later (no header except auth,
          maybe no footer?) so that the search is presented clearly.
        </p>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
