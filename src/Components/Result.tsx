import * as React from "react";
import styled from "../utils/theme";

const SearchResultCard = styled.div`
  display: flex;
  // justify-content :center;
  margin: 5px;
`;

const SearchResultDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchResultImg = styled.img`
  margin-right: 5px;
`;
const Title = styled.h1`
  margin: 0;
`;

const Author = styled.h2`
  margin: 0;
`;

function authorsArrayToString(arr: Array<string>) {
  return arr.reduce((acc, curr, idx) => {
    return idx === arr.length - 1 ? acc + " and " + curr : acc + ", " + curr;
  }, arr.shift());
}

//Todo: Create proper types and components for search results
const Result = (props: any) => {
  let authors = authorsArrayToString(props.searchResultObjects.authors);
  return (
    <SearchResultCard>
      <SearchResultImg src={props.imageLinks.thumbnail} alt="bookcover" />
      <SearchResultDesc>
        <Title>{props.title}</Title>
        <Author>by {authors}</Author>
      </SearchResultDesc>
    </SearchResultCard>
  );
};

export default Result;
