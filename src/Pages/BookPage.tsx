import React from "react";
import styled from "../utils/theme";
import { RouteComponentProps } from "react-router";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type BookPageProps = {
  bookPassed?: any;
  isbn: string;
};

type BookPageState = {
  book: any;
  error: string | null;
  loading: boolean;
};

class BookPage extends React.Component<
  RouteComponentProps<BookPageProps>,
  BookPageState
> {
  state = {
    book: {
      volumeInfo: {
        title: null,
        authors: []
      }
    },
    error: null,
    loading: true
  };

  getBookByIsbn(isbn: string) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${isbn}`;

    fetch(url)
      .then(res => {
        return res.json();
      })

      .then(data => {
        console.log("data from isbn search:", data);
        if (data.error) {
          this.setState({ error: data.error.message, loading: false });
          return;
        }

        //Check items were returned and push them to searchBooks
        if (data.items && data.items.length) {
          this.setState({
            book: data.items[0],
            error: null,
            loading: false
          });
        } else {
          this.setState({
            book: {},
            error: "Couldn't find the book you're looking for. Sorry! :(",
            loading: false
          });
        }
      });
  }

  componentWillMount() {
    if (!this.props.match.params.bookPassed) {
      this.getBookByIsbn(this.props.match.params.isbn);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <h1>
            {this.state.loading
              ? `Looking for ISBN ${this.props.match.params.isbn}...`
              : this.state.error
              ? `Error: ${this.state.error}`
              : this.state.book.volumeInfo
              ? this.state.book.volumeInfo.title
              : "u suck lol"}
          </h1>
          <p></p>
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookPage;
