import React from "react";
import "./index.scss";

const FooterContainer = () => {
  return (
    <footer>
      <div id="mail-link-container">
        <a id="mail-link" href="mailto:post@mvh.no">
          post@mvh.no
        </a>
      </div>
      <section className="list-container">
        <ul>
          <li>
            <p>MVH</p>
          </li>
          <li>
            <a href="/">Om Mvh</a>
          </li>
          <li>
            <a href="/">Kontakt oss</a>
          </li>
          <li>
            <a href="/">Ofte Stilte spørsmål</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>FOR DEG</p>
          </li>
          <li>
            <a href="/">Registrering</a>
          </li>
          <li>
            <a href="/">Betingelser</a>
          </li>
          <li>
            <a href="/">Min Side</a>
          </li>
        </ul>
        <ul id="press">
          <li>
            <p>PRESSE</p>
          </li>
          <li>
            <a href="/">Kit</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default FooterContainer;
