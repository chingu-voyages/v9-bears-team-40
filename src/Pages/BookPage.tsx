import React from "react";
import Book from "../Components/Book";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "../utils/theme";
import { RouteComponentProps } from "react-router";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type BookPageProps = {
  general?: string;
};

type BookPageState = {
  searchResults: Array<bookObject>;
  noResult: boolean;
};

type bookObject = {
  title: string;
  authors: [string];
  date?: string;
  isbn?: string;
  pages?: string;
  description?: string;
  error?: string;
};

class BookPage extends React.Component<
  RouteComponentProps<BookPageProps>,
  BookPageState
> {
  state = {
    searchResults: [],
    noResult: false
  };

  componentDidMount() {
    let searchedTerm = this.props.match.params.general;

    //Replace spaces with pluses
    if (searchedTerm) {
      searchedTerm.replace(" ", "+");
    }

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchedTerm}`)
      .then(res => {
        return res.json();
      })

      .then(data => {
        let searchResults: Array<bookObject> = [];

        //Check items were returned and push them to searchResults
        if (data.items.length) {
          data.items.map((item: any) =>
            //Create a function to properly desctructure API result into bookObject
            searchResults.push(item.volumeInfo)
          );
          this.setState({ noResult: false, searchResults: searchResults });
        } else {
          this.setState({ noResult: true, searchResults: [] });
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <h1>Results for '{this.props.match.params.general}'</h1>
          {this.state.noResult ? (
            <h1>"Nothing here :( Try searching again!"</h1>
          ) : (
            this.state.searchResults.map((bookInfo: bookObject, key) => {
              return <Book key={key} title={bookInfo.title}></Book>;
            })
          )}
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookPage;
