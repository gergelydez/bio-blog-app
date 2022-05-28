import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const Modal = ({ show, onClose, message, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={classes.overlay_container}  onClick={handleCloseClick}>
      <div className={classes.overlay}> </div>
      <div className={classes.modal}>
        <div className={classes.modal_title}>{title && <h3>{title}</h3>}</div>

        <div className={classes.modal_body}>
          <p>{message}</p>
        </div>
        <button onClick={handleCloseClick}>OK</button>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("overlays")
    );
  } else {
    return null;
  }
};

export default Modal;
