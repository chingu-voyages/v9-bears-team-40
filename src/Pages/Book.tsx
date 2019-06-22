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

type BookProps = {
  search: {
    isbn?: string;
  };
};

const Book: React.FunctionComponent<BookProps> = props => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <h1>Book title</h1>
        <p>Here's a super neat book delivered straight to your console</p>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Book;
