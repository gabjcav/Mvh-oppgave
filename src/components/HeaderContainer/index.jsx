import React from "react";
import "./index.scss";
import mvhLogo from "../../img/mvh-logo.svg";
import iconUser from "../../img/icon-user.svg";
const HeaderContainer = () => {
  return (
    <header>
      <nav>
        <a id="logo" href="/">
          <img src={mvhLogo} alt="Company logo" />
        </a>
        <div id="container">
          <a id="faq-link" href="/">
            Ofte stilte spørsmål
          </a>
          <button id="profile-btn">
            <img src={iconUser} alt="User icon" />
            <p>GABRIEL CAVALLARO</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContainer;
