import * as React from "react";
import styled from "../utils/theme";

const SearchResult = styled.div`
  display: flex;
  // justify-content :center;
  margin: 5px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-right: 5px;
`;
const Title = styled.h1`
  margin: 0;
`;

const Author = styled.h2`
  margin: 0;
`;

const OutterStars = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #ccc;
  }
`;

const InnerStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  // width:0;
  width: ${(props: IInderStars) => props.averageRating || 0};
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #f8ce0b;
  }
`;

interface IInderStars {
  averageRating?: string;
}
function authorsArrayToString(arr: Array<string>) {
  return arr.reduce((acc, curr, idx) => {
    return idx === arr.length - 1 ? acc + " and " + curr : acc + ", " + curr;
  }, arr.shift());
}

//Todo: Create proper types and components for search results
const Result = (props: any) => {
  let authors = authorsArrayToString(props.searchResultObjects.authors);
  console.log((props.searchResultObjects.averageRating / 5) * 100 + "%" || 0);
  console.log(props.searchResultObjects.averageRating);

  return (
    <SearchResult>
      <Image
        src={props.searchResultObjects.imageLinks.thumbnail}
        alt="bookcover"
      />
      <Description>
        <Title>{props.searchResultObjects.title}</Title>
        <Author>by {authors}</Author>
        <OutterStars>
          {props.searchResultObjects.averageRating ? (
            <InnerStars
              averageRating={
                (props.searchResultObjects.averageRating / 5) * 100 + "%"
              }
            />
          ) : (
            <InnerStars />
          )}
          - {props.searchResultObjects.averageRating} out of 5
        </OutterStars>
      </Description>
    </SearchResult>
  );
};

export default Result;
