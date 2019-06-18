import * as React from "react";
import styled from "../utils/theme";

//Example styled component
const Wrapper = styled.footer`
  align-items: center;
  background-color: ${props => props.theme.colors.fg};
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
  line-height: 1.5rem;
  min-height: 4.5rem;
  & > * {
    margin: 1.5rem;
  }
`;
const FooterAbout = styled.div`
  display: flex;
`;

const FooterDescription = styled.div`
  font-size: 0.8rem;
  line-height: 1.2rem;
  margin: 0 1.2rem;
  max-width: 30%;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    border-bottom: 1px solid ${props => props.theme.colors.link};
    color: ${props => props.theme.colors.body};
    text-decoration: none;
  }
`;

export const Footer: React.FC<{}> = () => {
  return (
    <Wrapper>
      <FooterAbout>
        <h1>Chapterly</h1>
        <FooterDescription>
          Chapterly is an app for readers to search, rate, and review books. We
          help you find the books you've already loved, and the books you'll
          love in the future. Chapterly is a participant in the XYZ affiliate
          program. This income is used to support development and hosting.
          Thanks for understanding :)
        </FooterDescription>
      </FooterAbout>
      <FooterLinks>
        <a href="">About</a>
        <a href="">Privacy</a>
        <a href="">Contact</a>
      </FooterLinks>
    </Wrapper>
  );
};
