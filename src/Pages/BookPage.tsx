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
  title: string;
  authors?: [string];
  date?: string;
  isbn?: string;
  pages?: string;
  description?: string;
};

interface IBookPageState {
  searchResults: Array<bookObject>;
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
      searchResults: []
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
        searchResults.map((searchResult: any) => {
          bookObjects.push(searchResult.volumeInfo);
        });
        return bookObjects;
      })
      .then(bookObjects => this.setState({ searchResults: bookObjects }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          {this.state.searchResults.map((bookInfo: bookObject, key) => {
            return <Book key={key} title={bookInfo.title}></Book>;
          })}
          <h1>{this.props.match.params.general}</h1>
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BookPage;
