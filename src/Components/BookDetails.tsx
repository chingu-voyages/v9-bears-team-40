import * as React from "react";
import styled from "../utils/theme";
import googleBooksVolume from "../types/googleBooksVolume";
import authorsArrayToString from "../utils/authorsArrayToString";
import Stars from "./Stars";

type BookDetailsProps = {
  book: googleBooksVolume;
};

const Thumnbnail = styled.img`
  height: auto;
  width: 16rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0;
  }
`;

const BookDetails: React.FunctionComponent<BookDetailsProps> = props => {
  const {
    title,
    authors,
    publishedDate,
    pageCount,
    imageLinks,
    industryIdentifiers,
    averageRating,
    ratingsCount
  } = props.book.volumeInfo;

  return (
    <Wrapper>
      <h1>{title}</h1>
      {authors ? <h2>{authorsArrayToString(authors)}</h2> : ""}
      {averageRating && ratingsCount ? (
        <React.Fragment>
          <Stars averageRating={averageRating.toString()} />{" "}
          <span>({ratingsCount})</span>
        </React.Fragment>
      ) : null}
      <span>{publishedDate ? publishedDate.slice(0, 4) : null}</span>
      <span>{pageCount ? pageCount + " pages" : null}</span>
      {imageLinks && imageLinks.thumbnail ? (
        <Thumnbnail src={imageLinks.thumbnail} />
      ) : null}
      {industryIdentifiers ? (
        <span>
          {industryIdentifiers[0].type}: {industryIdentifiers[0].identifier}
        </span>
      ) : null}
    </Wrapper>
  );
};

export default BookDetails;
