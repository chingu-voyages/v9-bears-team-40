import * as React from "react";
import styled from "../utils/theme";

const Thumbnail = styled.div`
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

const DefaultThumbnail: React.FunctionComponent<{}> = () => {
  return <Thumbnail>?</Thumbnail>;
};

export default DefaultThumbnail;
