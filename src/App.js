import React from "react";
import FooterContainer from '../src/components/FooterContainer';
import MainContainer from '../src/components/MainContainer';
import HeaderContainer from '../src/components/HeaderContainer';
import './styles/global.scss'
function App() {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer /> 
    </>
  );
}

export default App;
