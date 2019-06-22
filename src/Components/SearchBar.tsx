import React from "react";
import styled from "../utils/theme";
import { Route, Link, withRouter } from "react-router-dom";

const Button = styled(Link)`
  background-color: ${props => props.theme.colors.link};
  border: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0 0.75rem;
  text-decoration: none;
`;

const Input = styled.input`
  border: 0;
  border-radius: 0.75rem 0 0 0.75rem;
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fonts.body};
  padding: 0.75rem;
  outline: 0;
  &:focus {
    box-shadow: inset 2px 2px 0 ${props => props.theme.colors.link},
      inset 2px -2px 0 ${props => props.theme.colors.link};
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.bg};
  border-radius: 0.75rem;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

class SearchBar extends React.Component {
  state = {
    keyword: ""
  };

  buttonClickHandler = (event: any) => {
    this.setState({ keyword: event.target.value });
  };

  enterKeyHandler = (event: any) => {
    if (event.key === "Enter") {
      this.buttonClickHandler(event);
    }
  };

  render() {
    return (
      <Wrapper>
        <Input
          onChange={this.buttonClickHandler}
          onKeyPress={this.enterKeyHandler}
        />
        <Button to={`/b/${encodeURI(this.state.keyword)}`}>Search</Button>
      </Wrapper>
    );
  }
}

export default SearchBar;
