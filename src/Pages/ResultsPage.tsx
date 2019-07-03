import React from "react";
import styled from "../utils/theme";
import { RouteComponentProps } from "react-router";

import Result from "../Components/Result";
import Child from "../Components/Child";
import Modal from "../Components/Modal";
import googleBooksVolume from "../types/googleBooksVolume";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3rem;
`;

type ResultPageProps = {
  general?: string;
};

type ResultPageState = {
  searchResults: Array<googleBooksVolume>;
  noResult: boolean;
  error: string | null;
};

class ResultPage extends React.Component<
  RouteComponentProps<ResultPageProps>,
  ResultPageState
> {
  state = {
    searchResults: [],
    noResult: false,
    error: null
  };

  getSearchResults() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.general}`;

    fetch(url)
      .then(res => {
        return res.json();
      })

      .then(data => {
        console.log("data", data);
        if (data.error) {
          this.setState({ error: data.error.message });
          return;
        }

        let searchResults: Array<googleBooksVolume> = [];

        //Check items were returned and push them to searchResults
        if (data.items && data.items.length) {
          data.items.map((item: googleBooksVolume) =>
            //Todo: Create a function to properly desctructure API result into ResultObject and provide proper types for both
            searchResults.push(item)
          );
          this.setState({
            noResult: false,
            searchResults: searchResults,
            error: null
          });
        } else {
          this.setState({ noResult: true, searchResults: [], error: null });
        }
      });
  }

  componentWillMount() {
    this.getSearchResults();
  }

  componentDidUpdate(prevProps: RouteComponentProps) {
    //Update search results if the user executes another search on the results page
    if (prevProps.match.params !== this.props.match.params) {
      this.getSearchResults();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Main>
          <h1>
            {this.state.error
              ? this.state.error
              : `Results for '${this.props.match.params.general}'`}
          </h1>
          <Modal>
            <Child />
          </Modal>
          {this.state.noResult ? (
            <p>Nothing here :( Try searching again!</p>
          ) : (
            this.state.searchResults.map((book: googleBooksVolume, key) => {
              return <Result key={key} book={book} />;
            })
          )}
        </Main>
      </React.Fragment>
    );
  }
}

export default ResultPage;
