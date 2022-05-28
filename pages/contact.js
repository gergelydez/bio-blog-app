import Head from "next/head";
import React, { Fragment, useState } from "react";
import ContactForm from "../components/contact/contact-form";


function ContactPage() {


  return (
    <Fragment>
      <Head>
        <title>Kapcsolat</title>
        <meta
          name="description"
          content="Kapcsolat-Keress bátran kérdésekkel-Vedd fel a kapcsolatot velunk"
        />
      </Head>
      <ContactForm />
   
    </Fragment>
  );
}

export default ContactPage;
