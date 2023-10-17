import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const OverlayModal = (props) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </>
  );
};

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlay-root");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <OverlayModal>{props.children}</OverlayModal>,
        portalElement
      )}
    </>
  );
};

export default Modal;
