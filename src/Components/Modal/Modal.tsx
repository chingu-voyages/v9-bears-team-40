import React from "react";
import StyledPortal from "./Portal";
import ModalWraper from "./ModalWraper";

const Modal = (props: any) => {
  return (
    <StyledPortal>
      <ModalWraper>{props.children}</ModalWraper>
    </StyledPortal>
  );
};

export default Modal;
