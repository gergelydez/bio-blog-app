import React, { Fragment } from "react";
import { useRef, useState } from "react";
import classes from "./contact-form.module.css";
import Modal from "../layout/modal";

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modaltitle, setModalTitle] = useState("");
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  function success() {
    setModalMessage(
      "Kedves érdeklődő! Köszönjük üzenetét, hamarosan jelentkezünk! "
    );
    setModalTitle("Üzenet elküldve");
  }
  function error() {
    setModalMessage(
      "Kérjük, hogy az összes szükséges mezőt helyesen töltse ki!"
    );
    setModalTitle("Hiba");
  }
  function sendMessageHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    if (
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredName & (enteredName.trim() === "") ||
      !enteredMessage ||
      enteredMessage.trim() === ""
    ) {
      openModal();
      error();

      return;
    } else {
      openModal();
      success();
    }

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: { "Content-Type": "application/json" },
    });
    event.target.reset();
  }
  return (
    <Fragment>
      <section className={classes.contact} onSubmit={sendMessageHandler}>
        <h2>Segithetünk? Küldj üzenetet! </h2>
        <form className={classes.form}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="name">Név</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Üzenet</label>
            <textarea id="message" rows={5} ref={messageInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Küldés!</button>
          </div>
        </form>
      </section>
      <Modal
        onClose={closeModal}
        show={showModal}
        title={modaltitle}
        message={modalMessage}
      />
    </Fragment>
  );
}

export default ContactForm;
