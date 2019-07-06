import * as React from "react";
import styled from "../../utils/theme";
import authorsArrayToString from "../../utils/authorsArrayToString";

type InfoProps = {
  title: string;
  authors?: Array<string>;
  publishedDate?: string;
};

const Authors = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 3.5rem;
`;

const Wrapper = styled.div`
  margin-bottom: 0.75rem;
  order: 1;
  h1,
  h2 {
    margin: 0;
  }
`;

const Year = styled.h2`
  font-size: 2rem;
  line-height: 2rem;
`;

const Info: React.FunctionComponent<InfoProps> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      {props.authors ? (
        <Authors>{authorsArrayToString(props.authors)}</Authors>
      ) : null}
      {props.publishedDate ? (
        <Year>({props.publishedDate.slice(0, 4)})</Year>
      ) : null}
    </Wrapper>
  );
};

export default Info;
