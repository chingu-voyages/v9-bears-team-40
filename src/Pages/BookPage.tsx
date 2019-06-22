import React from "react";
import Book from "../Components/Book";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "../utils/theme";
import { RouteComponentProps, withRouter } from "react-router";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type IBookPageProps = {
  general?: string;
  key?: string;
};

type bookObject = {
  title?: string;
  authors?: [string];
  date?: string;
  isbn?: string;
  pages?: string;
  description?: string;
  error?: string;
};

interface IBookPageState {
  searchResults: Array<bookObject>;
  noResult: boolean;
}
class BookPage extends React.Component<
  RouteComponentProps<IBookPageProps>,
  IBookPageState
> {
  //You can use this example isbn
  //9781101137192
  constructor(props: RouteComponentProps<IBookPageProps>) {
    super(props);
    this.state = {
      searchResults: [],
      noResult: false
    };
  }
  componentDidMount() {
    let keyword = this.props.match.params.general;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        let searchResults = data.items;
        let bookObjects: Array<bookObject> = [];
        if (searchResults) {
          searchResults.map((searchResult: any) => {
            bookObjects.push(searchResult.volumeInfo);
          });
          return bookObjects;
        } else {
          this.setState({ noResult: true });
          return bookObjects;
        }
      })
      .then(bookObjects => this.setState({ searchResults: bookObjects }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <h1>Search keyword : {this.props.match.params.general}</h1>
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
