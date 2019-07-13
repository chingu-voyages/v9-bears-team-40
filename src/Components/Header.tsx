import * as React from "react";
import styled from "../utils/theme";

import { Button, ButtonLink } from "./Button";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

import SearchBar from "./SearchBar";
import Signup from "./Signup";
import SignupPage from "../Pages/SignupPage";

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

//Prop types
type HeaderProps = {};

type HeaderState = {
  isModalOpen: boolean;
  isLoggedIn: boolean;
  email: string;
  name: string;
  password: string;
};

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      isLoggedIn: false,
      email: "",
      name: "",
      password: ""
    };
  }

  onEmailChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  onNameChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  onPasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  toggleModal = () => {
    const modalIsOpen = this.state.isModalOpen;
    this.setState({
      isModalOpen: !modalIsOpen
    });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(() => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
        this.toggleModal();
      })
      .catch(err => console.log("register failed", err));
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ButtonLink to="/">Log out</ButtonLink>;
    } else {
      button = <Signup toggleModal={this.toggleModal} />;
    }

    return (
      <Wrapper>
        <Brand to="/">
          <i className="fas fa-book"></i>
          <h1>Chapterly</h1>
        </Brand>
        <SearchBar />
        {button}
        {this.state.isModalOpen && (
          <Modal>
            <SignupPage
              onEmailChange={this.onEmailChange}
              onNameChange={this.onNameChange}
              onPasswordChange={this.onPasswordChange}
              onSubmitSignIn={this.onSubmitSignIn}
              toggleModal={this.toggleModal}
            />
          </Modal>
        )}
      </Wrapper>
    );
  }
}

export default Header;
