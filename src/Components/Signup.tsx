import * as React from "react";
import styled from "../utils/theme";

const Wrapper = styled.div`
  background: white;
  width: 300px;
  height: 400px;
`;

const Signup = (props: any) => {
  return (
    <Wrapper>
      <form action="database-endpoint">
        <h1>Sign Up</h1>
        <p>
          Name : <input />
        </p>
        <p>
          Email : <input />
        </p>
        <p>
          Password : <input />
        </p>
        <button> submit </button>
        <button type="button" onClick={props.toggleModal}>
          Cancel
        </button>
      </form>
    </Wrapper>
  );
};

export default Signup;
