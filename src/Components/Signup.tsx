import React from "react";
import { Button } from "./Button";

type IProps = {
  toggleModal: () => void;
};

const Signup = (props: IProps) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        onClick={() => props.toggleModal()}
        style={{ marginRight: "0.25rem" }}
      >
        Log in
      </Button>
      <Button onClick={() => props.toggleModal()}>Sign up</Button>
    </div>
  );
};

export default Signup;
