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
  onEmailChange: (event: any) => void;
  onNameChange: (event: any) => void;
  onPasswordChange: (event: any) => void;
  onSubmitSignIn: () => void;
  toggleModal: () => void;
};
type IState = {};

class SignupPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
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
            <input onChange={this.props.onNameChange} />
            <label>Email:</label>
            <input onChange={this.props.onEmailChange} />
            <label>Password:</label>
            <input onChange={this.props.onPasswordChange} type="password" />
          </FormFields>

          <Button onClick={this.props.onSubmitSignIn}>Sign up</Button>
        </InnderWrapper>
      </Wrapper>
    );
  }
}

export default SignupPage;
