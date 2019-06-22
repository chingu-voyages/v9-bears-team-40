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
  };
};

const BookPage: React.FunctionComponent<BookPageProps> = props => {
  //You can use this example isbn
  //9780451191144

  let bookData = {};

  return (
    <React.Fragment>
      <Header />
      <Main>
        <h1>Book title</h1>
        <p>Here's a super neat book delivered straight to your console</p>
        <Book book={bookData} />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default BookPage;
