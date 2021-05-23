import React, { useState } from "react";
import "./index.scss";
import iconSearch from "../../img/icon-search.svg";
import { subjectData } from "../../utils/subjectData";
import { v4 as uuidv4 } from "uuid";
const HeroContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section id="hero-container">
      <h1>Reklame, teknologi </h1>
      <h2>og design</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <div id="searchbar-container">
        <div id="searchbar">
          <label id="icon-container" htmlFor="search-input">
            <img src={iconSearch} alt="Icon for searchbar." />
          </label>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            id="search-input"
            placeholder="Hva leter du etter?"
          />
          <button>Søk</button>
        </div>

        {/* SEARCHBAR AUTOCOMPLETE */}
        <div id="result-container">
          {subjectData
            .filter((value) => {
              if (searchTerm === "") {
                return "";
              } else if (
                value.toLowerCase().includes(searchTerm?.toLowerCase())
              ) {
                return value;
              }
              return "";
            })
            .map((title) => {
              return (
                <a href="/" key={uuidv4()}>
                  <p id="result">{title}</p>
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
