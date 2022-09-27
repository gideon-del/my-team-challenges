import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import TeamsCointainer from "./components/TeamContainer/TeamsCointainer";
import styled from "styled-components";
const Footer = styled.footer`
  text-align: center;
  padding-bottom: 1rem;
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #a9a9a9;
  }
`;
const App = () => {
  return (
    <>
      <Header />
      <TeamsCointainer />
      <Footer>
        <p>
          created by{" "}
          <a
            href="https://devchallenges.io/portfolio/gideon-del"
            target="_blank"
          >
            Gideon
          </a>{" "}
          - devChallenges.io
        </p>
      </Footer>
    </>
  );
};

export default App;
