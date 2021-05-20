import React from "react";
import "../../styles/main.scss";
import HeroContainer from "../HeroContainer";
const MainContainer = () => {
  return (
    <main>
      <HeroContainer />
      <section id="themes">
        <h2>Mest etterspurte tema</h2>
        <div id="themes-container">
          <article>
            <p>Design</p>
          </article>
          <article>
            <p>Reklame</p>
          </article>
          <article>
            <p>Backend</p>
          </article>
          <article>
            <p>Frontend</p>
          </article>
          <article>
            <p>UX</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
