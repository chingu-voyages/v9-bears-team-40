import * as React from "react";
import styled from "../utils/theme";

import authorsArrayToString from "../utils/authorsArrayToString";
import googleBooksVolume from "../types/googleBooksVolume";

import { Link } from "react-router-dom";
import DefaultThumbnail from "./DefaultThumbnail";
import Stars from "./Stars";

const Wrapper = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.75rem;
  * {
    margin: 0;
  }
`;

const BookDescription = styled.summary`
  margin-top: 0.75rem;
  font-size: 0.9rem;
`;

const ThumbnailWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

type ResultProps = {
  book: googleBooksVolume;
};

const Result: React.FunctionComponent<ResultProps> = props => {
  //Destructure book into variables
  let {
    title,
    authors,
    publishedDate,
    description,
    imageLinks,
    averageRating
  } = props.book.volumeInfo;

  const formattedAuthors = authorsArrayToString(authors || []);

  //Trim long descriptions
  if (description && description.length > 500) {
    description = description.slice(0, 497) + "...";
  }

  //Render a thumbnail if there is one
  let thumbnail = <DefaultThumbnail />;
  if (imageLinks && imageLinks.thumbnail) {
    thumbnail = <img src={imageLinks.thumbnail} alt={title} />;
  }

  return (
    <Wrapper>
      <ThumbnailWrapper>{thumbnail}</ThumbnailWrapper>
      <BookInfo>
        <h2>
          <Link
            to={{
              pathname: `/b/${props.book.id}`,
              state: {
                book: props.book
              }
            }}
          >
            {title}
          </Link>
        </h2>
        <p>{formattedAuthors}</p>
        <p>{publishedDate}</p>
        {description && <BookDescription>{description}</BookDescription>}
        {averageRating && <Stars averageRating={averageRating.toString()} />}
      </BookInfo>
    </Wrapper>
  );
};

export default Result;
