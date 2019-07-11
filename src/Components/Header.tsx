import * as React from "react";
import styled from "../utils/theme";

import { Button, ButtonLink } from "./Button";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

import SearchBar from "./SearchBar";
import SignupPage from "../Pages/SignupPage";

//Prop types
type HeaderProps = {
  IsLoggedIn?: boolean;
};

type HeaderState = {
  isModalOpen: boolean;
};

const Brand = styled(Link)`
  color: ${props => props.theme.colors.body};
  display: flex;
  text-decoration: none;
  h1,
  i {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  h1 {
    margin: 0;
  }
  i {
    margin-right: 0.75rem;
  }
  @media only screen and (max-width: 480px) {
    h1 {
      display: none;
    }
  }
`;

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

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    isModalOpen: false
  };

  toggleModal() {
    const modalIsOpen = this.state.isModalOpen;
    this.setState({
      isModalOpen: !modalIsOpen
    });
  }

  render() {
    return (
      <Wrapper>
        <Brand to="/">
          <i className="fas fa-book"></i>
          <h1>Chapterly</h1>
        </Brand>
        <SearchBar />
        {this.props.IsLoggedIn ? (
          <ButtonLink to="/">Log out</ButtonLink>
        ) : (
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => this.toggleModal()}
              style={{ marginRight: "0.25rem" }}
            >
              Log in
            </Button>
            <Button onClick={() => this.toggleModal()}>Sign up</Button>
          </div>
        )}
        {this.state.isModalOpen && (
          <Modal>
            <SignupPage toggleModal={() => this.toggleModal()} />
          </Modal>
        )}
      </Wrapper>
    );
  }
}

export default Header;
