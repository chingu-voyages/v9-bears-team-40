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

  console.log(title, imageLinks, industryIdentifiers);

  return (
    <div>
      <h2>{title}</h2>
      <p>{authors}</p>
      <p>{publishedDate}</p>
      <p>{description}</p>
    </div>
  );
};

export default Result;
