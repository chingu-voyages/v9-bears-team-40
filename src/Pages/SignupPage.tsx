import * as React from "react";
import styled from "../utils/theme";

const Wrapper = styled.div`
  background: white;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
`;

const SignupPage = (props: any) => {
  return (
    <Wrapper>
      <form action="database-endpoint">
        <h1>Sign Up</h1>
        <p>
          Name : <input />
        </p>
        <p>
          Email : <input type="email" />
        </p>
        <p>
          Password : <input type="password" />
        </p>
        <button> submit </button>
        <button type="button" onClick={props.toggleModal}>
          Cancel
        </button>
      </form>
    </Wrapper>
  );
};

export default SignupPage;
