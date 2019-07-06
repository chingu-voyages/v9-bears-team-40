import * as React from "react";
import styled from "../../utils/theme";

import googleBooksVolume from "../../types/googleBooksVolume";

import DefaultThumbnail from "../DefaultThumbnail";
import Details from "./Details";
import Info from "./Info";

type BookDetailsProps = {
  book: googleBooksVolume;
};

const ThumbnailAndDetails = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 0;
  margin: 1.5rem 1.5rem 1.5rem 0;
  order: 2;
`;

const Excerpts = styled.section`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 1.5rem 0;
  order: 3;
`;

const Thumbnail = styled.img`
  height: auto;
  width: 16rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookDetails: React.FunctionComponent<BookDetailsProps> = props => {
  const {
    title,
    authors,
    publishedDate,
    description,
    pageCount,
    imageLinks,
    industryIdentifiers,
    averageRating,
    ratingsCount
  } = props.book.volumeInfo;

  return (
    <Wrapper>
      <Info title={title} authors={authors} publishedDate={publishedDate} />

      <InnerWrapper>
        <ThumbnailAndDetails>
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
        </ThumbnailAndDetails>

        <Excerpts>
          <p>{description || "No description available for this book."}</p>
        </Excerpts>
      </InnerWrapper>
    </Wrapper>
  );
};

export default BookDetails;
