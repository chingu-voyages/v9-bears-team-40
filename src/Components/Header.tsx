import * as React from "react";
import styled from "../utils/theme";

import { Button, ButtonLink } from "./Button";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

import SearchBar from "./SearchBar";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";

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
  isLoggedIn: boolean;
  email: string;
  name: string;
  password: string;
  modal: any;
};

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      name: "",
      password: "",
      modal: null
    };
  }

  authMethods = {
    getInput: {
      email: (event: any) => {
        this.setState({ email: event.target.value });
      },
      name: (event: any) => {
        this.setState({ name: event.target.value });
      },
      password: (event: any) => {
        this.setState({ password: event.target.value });
      }
    },
    toggleModal: (modal: any) => {
      this.setState({
        modal: modal
      });
    },
    onSubmitSignIn: () => {
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
          this.authMethods.toggleModal(null);
        })
        .catch(err => console.log("register failed", err));
    }
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ButtonLink to="/">Log out</ButtonLink>;
    } else {
      button = (
        <div style={{ display: "flex" }}>
          <Button
            onClick={() =>
              this.authMethods.toggleModal(
                <Modal>
                  <LoginPage authMethods={this.authMethods} />
                </Modal>
              )
            }
            style={{ marginRight: "0.25rem" }}
          >
            Log in
          </Button>
          <Button
            onClick={() =>
              this.authMethods.toggleModal(
                <Modal>
                  <SignupPage authMethods={this.authMethods} />
                </Modal>
              )
            }
          >
            Sign up
          </Button>
        </div>
      );
    }

    return (
      <Wrapper>
        <Brand to="/">
          <i className="fas fa-book"></i>
          <h1>Chapterly</h1>
        </Brand>
        <SearchBar />
        {button}
        {this.state.modal}
      </Wrapper>
    );
  }
}

export default Header;
