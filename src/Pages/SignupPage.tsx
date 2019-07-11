import * as React from "react";
import styled from "../utils/theme";
import { Button } from "../Components/Button";

const Form = styled.form`
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

const SignupPage = (props: any) => {
  return (
    <Wrapper>
      <Button
        style={{
          position: "absolute",
          top: 0,
          right: 0
        }}
        onClick={props.toggleModal}
      >
        <i className="fas fa-times" />
      </Button>
      <Form action="database-endpoint">
        <h1>Sign Up</h1>
        <FormFields>
          <label>Name:</label>
          <input />
          <label>Email:</label>
          <input />
          <label>Password:</label>
          <input type="password" />
        </FormFields>

        <Button>Sign up</Button>
      </Form>
    </Wrapper>
  );
};

export default SignupPage;