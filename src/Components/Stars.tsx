import * as React from "react";
import styled from "../utils/theme";

type IStars = {
  averageRating?: string;
};

const GreyStars = styled.div`
  position: relative;
  display: inline-block;
  width: 90px;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #ccc;
  }
`;

const YellowStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props: IStars) => props.averageRating};
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #f8ce0b;
  }
`;

const Stars = (props: IStars) => {
  const starTotal = 5;
  return (
    <GreyStars>
      <YellowStars
        averageRating={`${(Number(props.averageRating) / starTotal) * 100}%`}
      />
    </GreyStars>
  );
};
export default Stars;
