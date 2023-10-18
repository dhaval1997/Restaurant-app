import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const ModalOverlay = (props) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </>
  );
};

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} ></div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlay-root");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
