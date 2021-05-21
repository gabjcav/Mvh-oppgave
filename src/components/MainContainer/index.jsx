import React from "react";
import "./index.scss";
import HeroContainer from "../HeroContainer";
import SubjectsContainer from "../SubjectsContainer";
import HowItWorksContainer from "../HowItWorksContainer";

const MainContainer = () => {
  return (
    <main>
      <HeroContainer />
      <SubjectsContainer />
      <HowItWorksContainer />
    </main>
  );
};

export default MainContainer;
