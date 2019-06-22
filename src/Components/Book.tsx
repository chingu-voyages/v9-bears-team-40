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
    //Try this isbn for testing: 9781101137192
    fetch(`https://www.googleapis.com/books/v1/volumes?q=
            ${
              this.props.search.isbn ? `isbn:${this.props.search.isbn}` : ""
            }`).then(data => {
      data.json().then(data => {
        if (data.items.length) {
          this.setState({
            volumeInfo: data.items[0].volumeInfo
          });
        } else {
          this.setState({
            error: true,
            errorMessage: "ISBN not found"
          });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.volumeInfo.title ||
            (this.state.errorMessage || "lol u messed up")}
        </h1>
        <p>{this.state.volumeInfo.description}</p>
      </div>
    );
  }
}

export default Book;
