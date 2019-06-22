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
  error: boolean;
  errorMessage: string | null;
  loading: boolean;
  book: {
    title: string;
    authors?: [string];
    date?: string;
    isbn?: string;
    pages?: string;
    description?: string;
  };
};

class Book extends React.Component<BookProps, BookState> {
  state = {
    error: false,
    errorMessage: null,
    loading: true,
    book: {
      title: "Loading..."
    }
  };

  getBook(searchObj: BookProps["search"]) {
    this.setState(
      {
        loading: true,
        book: {
          title: "Loading..."
        }
      },
      () =>
        fetch(`https://www.googleapis.com/books/v1/volumes?q=
            ${searchObj.general}`).then(data => {
          data.json().then(data => {
            if (!data.items) {
              this.setState({
                error: true,
                errorMessage: "Nothing here :( Try searching again!",
                loading: false
              });
            } else {
              const book = data.items[0].volumeInfo;
              this.setState({
                book: {
                  title: book.title,
                  authors: book.authors,
                  date: book.publishedDate,
                  isbn: book.industryIdentifiers[0],
                  pages: book.pageCount,
                  description: book.description
                },
                error: false,
                errorMessage: null,
                loading: false
              });
            }
          });
        })
    );
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
        <h1>{this.state.book.title}</h1>
      </React.Fragment>
    );
  }
}

export default Book;
