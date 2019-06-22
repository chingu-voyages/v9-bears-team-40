import * as React from "react";

type BookProps = {
  author?: string;
  general?: string;
  isbn?: string;
  title?: string;
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

const Book = (props: any) => {
  return <h1>Book title : {props.title}</h1>;
};

export default Book;
