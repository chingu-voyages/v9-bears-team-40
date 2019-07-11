import * as React from "react";
import styled from "../utils/theme";
import { Button } from "./Button";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.bg};
  max-height: 20rem;
  max-width: 20rem;
  height: 100%;
  width: 100%;
`;

const Signup = (props: any) => {
  return (
    <Wrapper>
      <Button
        style={{
          float: "right"
        }}
        onClick={props.toggleModal}
      >
        <i className="fas fa-times" />
      </Button>
      <form action="database-endpoint">
        <h1>Sign Up</h1>
        <p>
          Name : <input />
        </p>
        <p>
          Email : <input />
        </p>
        <p>
          Password : <input type="password" />
        </p>
        <Button>Sign up</Button>
      </form>
    </Wrapper>
  );
};

export default Signup;
