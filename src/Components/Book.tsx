import * as React from "react";
//import styled from '../utils/theme'

type BookProps = {
  search: {
    author?: string;
    general?: string;
    isbn?: string;
    title?: string;
  };
};

type BookState = {
  volumeInfo: any;
  error: boolean;
  errorMessage: string;
};

class Book extends React.Component<BookProps, BookState> {
  state = {
    volumeInfo: {
      title: "Loading",
      description: "Just a second..."
    },
    error: false,
    errorMessage: ""
  };

  componentWillMount() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=
            ${this.props.search.general}`).then(data => {
      data.json().then(data => {
        if (!data.items) {
          this.setState({
            error: true,
            errorMessage: "Nothing here :( Try searching again!"
          });
        } else {
          this.setState({
            volumeInfo: data.items[0].volumeInfo
          });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.error ? "Oops" : this.state.volumeInfo.title}</h1>
        <p>{this.state.errorMessage || this.state.volumeInfo.description}</p>
      </div>
    );
  }
}

export default Book;
