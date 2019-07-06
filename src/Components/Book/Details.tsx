import * as React from "react";
import styled from "../../utils/theme";

import Stars from "../Stars";

type DetailsProps = {
  googleReviews?: {
    score: number;
    number: number;
  };
  pageCount?: number;
  identifiers?: Array<{
    type: string;
    identifier: string;
  }>;
};

const Cell = styled.div`
  padding: 0.75rem;
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.fg};
  }
`;

const Table = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const Details: React.FunctionComponent<DetailsProps> = props => {
  let cells: Array<React.ReactElement> = [];

  if (
    props.googleReviews &&
    props.googleReviews.score &&
    props.googleReviews.number
  ) {
    cells.push(
      <Cell key={cells.length}>
        <i className="fab fa-google" />
      </Cell>,
      <Cell key={cells.length + 1}>
        <Stars averageRating={props.googleReviews.score.toString()} />(
        {props.googleReviews.number})
      </Cell>
    );
  }

  if (props.pageCount) {
    cells.push(
      <Cell key={cells.length}>Pages</Cell>,
      <Cell key={cells.length + 1}>{props.pageCount}</Cell>
    );
  }

  if (props.identifiers) {
    props.identifiers.map(identifier => {
      identifier.type = identifier.type.replace("_", " ");
      cells.push(
        <Cell key={cells.length}>{identifier.type}</Cell>,
        <Cell key={cells.length + 1}>{identifier.identifier}</Cell>
      );
      return null;
    });
  }

  return (
    <Wrapper>
      <Table>{cells}</Table>
    </Wrapper>
  );
};

export default Details;
