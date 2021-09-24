import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

//Helpers
const helper = document.getElementById("overlay");

const BackDrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClick}/>, helper)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        helper
      )}
    </>
  );
};

export default Modal;
