import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
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
