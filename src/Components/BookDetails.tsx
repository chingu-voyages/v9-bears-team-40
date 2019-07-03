import * as React from "react";
import styled from "../utils/theme";
import googleBooksVolume from "../types/googleBooksVolume";
import { props } from "bluebird";

type BookDetailsProps = {
  book: googleBooksVolume;
};

const BookDetails: React.FunctionComponent<BookDetailsProps> = props => {
  return <h1>{props.book.volumeInfo.title}</h1>;
};

export default BookDetails;
