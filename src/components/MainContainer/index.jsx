import React from "react";
import "./index.scss";
import HeroContainer from "../HeroContainer";
import SubjectsContainer from "../SubjectsContainer";

const MainContainer = () => {
  return (
    <main>
      <HeroContainer />

      <SubjectsContainer />

      {/* HOW IT WORKS SECTION BELOW */}

      <section id="how-it-works">
        <h4>Slik fungerer det for deg</h4>
        <div id="hiw-container">
          <article></article>
          <article></article>
          <article></article>
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
