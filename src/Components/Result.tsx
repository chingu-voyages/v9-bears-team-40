import * as React from "react";
import styled from "../utils/theme";
import authorsArrayToString from "../utils/authorsArrayToString";

type ResultProps = {
  book: any;
};

//Todo: Create proper types and components for search results
const Result = (props: ResultProps) => {
  console.log(props.book);

  let {
    title,
    publishedDate,
    description,
    imageLinks,
    industryIdentifiers
  } = props.book;
  const authors = authorsArrayToString(props.book.authors || []);

  //Trim long descriptions
  if (description && description.length > 500) {
    description = description.slice(0, 497) + "...";
  }

  //Render a thumbnail if there is one
  //Todo: replace with default thumbnail component like this --> [?]
  let thumbnail = null;
  if (imageLinks && imageLinks.thumbnail) {
    thumbnail = <img src={imageLinks.thumbnail} />;
  }

  console.log(title, imageLinks, industryIdentifiers);

  return (
    <div>
      <h2>{title}</h2>
      <p>{authors}</p>
      <p>{publishedDate}</p>
      {thumbnail}
      <p>{description}</p>
    </div>
  );
};

export default Result;
