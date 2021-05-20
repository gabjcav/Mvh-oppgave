import React from "react";
import "../../styles/main.scss";
import HeroContainer from "../HeroContainer";
import iconArrow from "../../img/icon-arrow.svg";
const MainContainer = () => {
  return (
    <main>
      <HeroContainer />

      {/*THEMES SECTION BELOW */}

      <section id="themes">
        <h2>Mest etterspurte tema</h2>
        <div id="themes-container">
          <article>
            <p>Design</p>
            <button className="theme-btn">
              <img src={iconArrow} alt="Arrow icon for 'Design'" />
            </button>
          </article>
          <article>
            <p>Reklame</p>
            <button className="theme-btn">
              <img src={iconArrow} alt="Arrow icon for 'Reklame' " />
            </button>
          </article>
          <article>
            <p>Backend</p>
            <button className="theme-btn">
              <img src={iconArrow} alt="Arrow icon for 'Backend'" />
            </button>
          </article>
          <article>
            <p>Frontend</p>
            <button className="theme-btn">
              <img src={iconArrow} alt="Arrow icon for 'Frontend'" />
            </button>
          </article>
          <article>
            <p>UX</p>
            <button className="theme-btn">
              <img src={iconArrow} alt="Arrow icon for 'UX'" />
            </button>
          </article>
        </div>
      </section>

      {/* HOW IT WORKS SECTION BELOW */}
      <section id="how-it-works">
        <h3>Slik fungerer det for deg</h3>
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
