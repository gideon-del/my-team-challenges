import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  font-family: "PT Serif", sans-serif;
  color: #000;
  font-size: 36px;
  font-weight: 700;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-block: 100px;
  @media (max-width: 704px) {
    flex-direction: column;
    padding-left: 10px;
    gap: 1rem;
    margin-block: 50px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;
const P = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  max-width: 439px;
  margin-block: 0px;
  margin-top: 10px;
`;
const Header = () => {
  return (
    <Container>
      <H1>The creative crew</H1>
      <TextContainer>
        <H2>Who we are</H2>
        <P>
          We are team of creatively diverse. driven. innovative individuals
          working in various locations from the world.
        </P>
      </TextContainer>
    </Container>
  );
};

export default Header;
