import * as React from "react";
import styled from "../utils/theme";

//Example styled component
const Wrapper = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.fg};
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
  line-height: 1.5rem;
  min-height: 4.5rem;
  padding: 1.5rem;
  * {
    margin: 0;
  }
`;

//Prop types
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <Wrapper>
      <h1>Chapterly</h1>
      <button>Login</button>
    </Wrapper>
  );
};
