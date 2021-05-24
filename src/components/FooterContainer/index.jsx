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
          <li className="link-container">
            <p className="link-title">MVH</p>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Om Mvh
            </a>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Kontakt oss
            </a>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Ofte stilte spørsmål
            </a>
          </li>
        </ul>
        <ul>
          <li className="link-container">
            <p className="link-title">FOR DEG</p>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Registrering
            </a>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Betingelser
            </a>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Min side
            </a>
          </li>
        </ul>
        <ul id="press">
          <li className="link-container">
            <p className="link-title">PRESSE</p>
          </li>
          <li className="link-container">
            <a className="link" href="/">
              Kit
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default FooterContainer;
