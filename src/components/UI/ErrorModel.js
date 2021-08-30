import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import clas from "./ErrorModel.module.css";

const Backdrop = (props) => {
  return <div className={clas.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
      <Card className={clas.modal}>
        <header className={clas.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={clas.content}>
          <p>{props.message}</p>
        </div>
        <footer className={clas.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModel;
