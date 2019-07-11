import styled from "../utils/theme";

import { Link } from "react-router-dom";

const Button = styled.button`
  background-color: ${props => props.theme.colors.link};
  border: 0;
  color: ${props => props.theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0 0.75rem;
  text-decoration: none;
`;

const ButtonLink = styled(Link)`
  background-color: ${props => props.theme.colors.link};
  border: 0;
  color: ${props => props.theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0 0.75rem;
  text-decoration: none;
`;

export { Button, ButtonLink };
