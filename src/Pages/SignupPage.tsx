import * as React from "react";
import styled from "../utils/theme";
import { Button } from "../Components/Button";

const InnderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin: 0.75rem auto;
  }
`;

const FormFields = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0.75rem;
  label,
  input {
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.25rem;
  }
  label {
    justify-self: end;
  }
  input {
    border: 1px solid ${props => props.theme.colors.fg};
    &:focus {
      border-color: ${props => props.theme.colors.link};
    }
  }
`;

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-height: 20rem;
  max-width: 20rem;
  height: 100%;
  width: 100%;
  >>>>>>>84e1887e65422d50cb7d04acd9f40705ccfd12c9: src/Components/Signup.tsx;
`;
type IProps = {
  toggleModal: any;
};
type IState = {
  email: string;
  name: string;
  password: string;
};

class SignupPage extends React.Component<IProps, IState> {
  state = {
    email: "",
    name: "",
    password: ""
  };

  onEmailChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  onNameChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  onPasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
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
    }).then(this.props.toggleModal());
  };

  render() {
    return (
      <Wrapper>
        <Button
          style={{
            position: "absolute",
            top: 0,
            right: 0
          }}
          onClick={this.props.toggleModal}
        >
          <i className="fas fa-times" />
        </Button>
        <InnderWrapper>
          <h1>Sign Up</h1>
          <FormFields>
            <label>Name:</label>
            <input onChange={this.onNameChange} />
            <label>Email:</label>
            <input onChange={this.onEmailChange} />
            <label>Password:</label>
            <input onChange={this.onPasswordChange} type="password" />
          </FormFields>

          <Button onClick={this.onSubmitSignIn}>Sign up</Button>
        </InnderWrapper>
      </Wrapper>
    );
  }
}

export default SignupPage;
