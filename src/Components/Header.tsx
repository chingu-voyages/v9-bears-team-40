import * as React from "react";
import styled from "../utils/theme";

//Example styled component
const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.fg};
  flex-grow: 0;
  min-height: 4rem;
`;

//Prop types
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  return <Wrapper>Header</Wrapper>;
};
