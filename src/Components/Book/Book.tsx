import * as React from "react";
import styled from "../../utils/theme";

import googleBooksVolume from "../../types/googleBooksVolume";

import DefaultThumbnail from "../DefaultThumbnail";
import Details from "./Details";
import Info from "./Info";

type BookDetailsProps = {
  book: googleBooksVolume;
};

const Thumbnail = styled.img`
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
      <Info title={title} authors={authors} publishedDate={publishedDate} />

      {imageLinks && imageLinks.thumbnail ? (
        <Thumbnail src={imageLinks.thumbnail} />
      ) : (
        <DefaultThumbnail />
      )}

      {industryIdentifiers || pageCount || averageRating ? (
        <Details
          googleReviews={{
            score: averageRating,
            number: ratingsCount
          }}
          identifiers={industryIdentifiers}
          pageCount={pageCount}
        />
      ) : null}
    </Wrapper>
  );
};

export default BookDetails;
