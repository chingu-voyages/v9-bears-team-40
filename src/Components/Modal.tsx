import React from "react";
import ReactDOM from "react-dom";
import styled from "../utils/theme";

const modalRoot = document.getElementById("modal-root");

class Portal extends React.Component {
  el: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

const Modal = styled(Portal)`
  position: relative;
  z-index: 999;
`;
export default Modal;
