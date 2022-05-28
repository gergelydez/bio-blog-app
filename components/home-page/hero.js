import React from "react";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section>
      <div className={classes.hero_container}>
        <div className={classes.welcome}>
          <h1>Üdvözöllek a BIO-BLOG oldalon </h1>
          <p className="background">
            Célunk,hogy minden családba bekerüljenek az egészséges élelmiszerek
            és alapanyagok, természetesen az ehhez tartozó táplálék kiegészítők,
            kozmetikumok és tisztítószerek is.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
