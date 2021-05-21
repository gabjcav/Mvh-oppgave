import React from "react";
import "./index.scss";
import iconSearch from "../../img/icon-search.svg";
const HeroContainer = () => {
  return (
    <section id="hero-container">
      <h1>Reklame, teknologi </h1>
      <h2>og design</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <div id="searchbar">
        <div id="icon-container">
          <img src={iconSearch} alt="" />
        </div>
        <input type="text" placeholder="Hva Leter du etter?" />
        <button>Søk</button>
      </div>
    </section>
  );
};

export default HeroContainer;
