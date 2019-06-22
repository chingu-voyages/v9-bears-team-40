import * as React from "react";
import Book from "../Components/Book";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "../utils/theme";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type BookPageProps = {
  search: {
    isbn?: string;
    title?: string;
    author?: string;
    general?: string;
  };
};

const BookPage: React.FunctionComponent<BookPageProps> = props => {
  //You can use this example isbn
  //9781101137192

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Book search={props.search} />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default BookPage;
