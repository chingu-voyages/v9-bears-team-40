import * as React from "react";

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

  getBook(searchObj: BookProps["search"]) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=
            ${searchObj.general}`).then(data => {
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

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.search !== this.props.search) {
      this.getBook(nextProps.search);
    }
  }

  componentWillMount() {
    this.getBook(this.props.search);
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.error ? "Oops" : this.state.volumeInfo.title}</h1>
        <p>{this.state.errorMessage || this.state.volumeInfo.description}</p>
      </React.Fragment>
    );
  }
}

export default Book;
