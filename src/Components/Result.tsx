import * as React from "react";
import styled from "../utils/theme";
import authorsArrayToString from "../utils/authorsArrayToString";
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

const DefaultThumbnail = styled.div`
  background-color: ${props => props.theme.colors.fg};
  color: ${props => props.theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3rem;
  line-height: 3rem;
  height: 190px;
  width: 128px;
`;

const ThumbnailWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

type ResultProps = {
  book: {
    title: string;
    authors?: Array<string>;
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
    industryIdentifiers?: [
      {
        type: string;
        identifier: string;
      }
    ];
    averageRating?: string;
  };
};

const Result = (props: ResultProps) => {
  console.log(props.book);
  //Destructure book into variables
  let {
    title,
    publishedDate,
    description,
    imageLinks,
    industryIdentifiers,
    averageRating
  } = props.book;
  const authors = authorsArrayToString(props.book.authors || []);

  //Trim long descriptions
  if (description && description.length > 500) {
    description = description.slice(0, 497) + "...";
  }

  //Render a thumbnail if there is one
  let thumbnail = <DefaultThumbnail>?</DefaultThumbnail>;
  if (imageLinks && imageLinks.thumbnail) {
    thumbnail = <img src={imageLinks.thumbnail} alt={title} />;
  }

  console.log(title, imageLinks, industryIdentifiers);

  return (
    <Wrapper>
      <ThumbnailWrapper>{thumbnail}</ThumbnailWrapper>
      <BookInfo>
        <h2>{title}</h2>
        <p>{authors}</p>
        <p>{publishedDate}</p>
        {description ? <BookDescription>{description}</BookDescription> : null}
        {averageRating ? <Stars averageRating={averageRating} /> : null}
      </BookInfo>
    </Wrapper>
  );
};

export default Result;
