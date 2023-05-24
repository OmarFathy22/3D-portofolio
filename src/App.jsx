import { useState } from "react";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import About from "./components/MainSections/About";
import Contact from "./components/MainSections/Contact";
import HERO from "./components/MainSections/Hero";
import Who from "./components/MainSections/Who";
import bg from "./assets/img/bg.jpeg";
function App() {
  const APP = styled.div`
    background-image: url(${bg});
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (max-width: 768px) {
      scroll-snap-type: none;
    }
  `;
  return (
    <APP>
      <HERO />
      <Who />
      <About />
      <Contact />
      {/* <Test/> */}
    </APP>
  );
}

export default App;
