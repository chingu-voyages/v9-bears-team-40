import React from "react";
import styled from "../utils/theme";
import { RouteComponentProps } from "react-router";

import googleBooksVolume from "../types/googleBooksVolume";

import Footer from "../Components/Footer";
import BookDetails from "../Components/BookDetails";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type BookPageProps = {
  bookPassed?: any;
  googleId: string;
};

type BookPageState = {
  book: googleBooksVolume | null;
  error: string | null;
  loading: boolean;
};

class BookPage extends React.Component<
  RouteComponentProps<BookPageProps>,
  BookPageState
> {
  state: BookPageState = {
    book: null,
    error: null,
    loading: true
  };

  getBookByGoogleId(googleId: string) {
    const url = `https://www.googleapis.com/books/v1/volumes/${googleId}`;

    fetch(url)
      .then(res => {
        return res.json();
      })

      .then(data => {
        console.log("data from volume search:", data);
        if (data.error) {
          this.setState({ error: data.error.message, loading: false });
          return;
        }

        //Check items were returned and push them to searchBooks
        if (data && data.id) {
          this.setState({
            book: data as googleBooksVolume,
            error: null,
            loading: false
          });
        } else {
          this.setState({
            book: null,
            error: "Couldn't find the book you're looking for. Sorry! :(",
            loading: false
          });
        }
      });
  }

  componentWillMount() {
    //If no book object is passed from the previous route, fetch the book by isbn
    if (!this.state.book) {
      this.getBookByGoogleId(this.props.match.params.googleId);
    } else {
      this.setState({
        book: this.props.location.state.book
      });
    }
  }

  render() {
    console.log(this.state.book);

    let children = null;

    if (this.state.loading) {
      children = (
        <h1>Looking for ISBN {this.props.match.params.googleId}...</h1>
      );
    } else if (this.state.book && !this.state.loading) {
      children = <BookDetails book={this.state.book} />;
    } else {
      children = [
        <h1>Error</h1>,
        <p>{this.state.error || "Error retrieving results."}</p>
      ];
    }

    return (
      <React.Fragment>
        <Main>{children}</Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookPage;
