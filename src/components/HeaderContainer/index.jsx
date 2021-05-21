import React from "react";
import "./index.scss";
import mvhLogo from "../../img/mvh-logo.svg";
import iconUser from "../../img/icon-user.svg";
const HeaderContainer = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={mvhLogo} alt="" />
        </a>
        <div id="container">
          <a id="faq-link" href="/">
            Ofte stile spørsmål
          </a>
          <button>
            <img src={iconUser} alt="" />
            <p>Gabriel Cavallaro</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContainer;
