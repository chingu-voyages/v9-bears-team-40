import React from "react";
import Result from "../Components/Result";
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

type ResultPageProps = {
  general?: string;
};

type ResultPageState = {
  searchResults: Array<bookObject>;
  noResult: boolean;
  error: string | null;
};

//Todo: extract this type to an importable file (for use in /b/ routes)
type bookObject = {
  title: string;
  authors: [string];
  date?: string;
  isbn?: string;
  pages?: string;
  description?: string;
  error?: string;
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
        if (data.error) {
          this.setState({ error: data.error.message });
          return;
        }

        let searchResults: Array<bookObject> = [];

        //Check items were returned and push them to searchResults
        if (data.items && data.items.length) {
          data.items.map((item: any) =>
            //Todo: Create a function to properly desctructure API result into ResultObject and provide proper types for both
            searchResults.push(item.volumeInfo)
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
    if (prevProps.match.params !== this.props.match.params) {
      this.getSearchResults();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <h1>
            {this.state.error
              ? this.state.error
              : `Results for '${this.props.match.params.general}'`}
          </h1>
          {this.state.noResult ? (
            <h1>Nothing here :( Try searching again!</h1>
          ) : (
            this.state.searchResults.map((ResultInfo: bookObject, key) => {
              return <Result key={key} title={ResultInfo.title}></Result>;
            })
          )}
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ResultPage;
