import * as React from "react";

//Todo: Create proper types and components for search results
const Result = (props: any) => {
  return (
    <div>
      <img src={props.imageLinks.thumbnail} alt="bookcover"></img>
      <h1>Book title : {props.title}</h1>
    </div>
  );
};

export default Result;
