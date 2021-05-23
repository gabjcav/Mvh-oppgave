import React, { useState } from "react";
import "./index.scss";
import iconSearch from "../../img/icon-search.svg";
import { subjectData } from "../../config/subjectData";

const HeroContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <section id="hero-container">
      <h1>Reklame, teknologi </h1>
      <h2>og design</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <div id="searchbar-container">
        <div id="searchbar">
          <div id="icon-container">
            <img src={iconSearch} alt="Icon for searchbar." />
          </div>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Hva Leter du etter?"
          />
          <button>Søk</button>
        </div>

        {/* SEARCHBAR AUTOCOMPLETE */}
        {subjectData
          .filter((value) => {
            if (searchTerm === "") {
              return;
            } else if (
              value.toLowerCase().includes(searchTerm?.toLowerCase())
            ) {
              return value;
            }
          })
          .map((title) => {
            return (
              <div id="result-container">
                <p id="result">{title}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HeroContainer;
