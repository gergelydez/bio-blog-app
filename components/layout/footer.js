import React from "react";
import classes from "./footer.module.css";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
function Footer() {
  const dynamicFooterDate = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_social_media}>
        <a
          href="www.facebook.com/groups/3845829025515515/?ref=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/egeszseg.siker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa fa-whatsapp"></i>
        </a>
        <a
          href="mailto:egeszsegsiker09@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope"></i>
        </a>
      </div>

      <div className={classes.footer_links}>
        <li>
          <Link href="/">Főoldal </Link>
        </li>
        <li>
          <Link href="/posts">Posts </Link>
        </li>

        <li>
          <Link href="/contact">Kapcsolat</Link>
        </li>
      </div>

      <p>BIO-BLOG &copy; {dynamicFooterDate}</p>
    </footer>
  );
}

export default Footer;
