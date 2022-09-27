import React from "react";
import styled from "styled-components";
const TeamContainer = styled.div`
  display: flex;
  align-items: strecth;
  &:nth-child(3n + 2) {
    margin-top: 8rem;
  }
  @media (max-width: 704px) {
    &:nth-child(3n + 2) {
      margin-top: 0;
    }
    &:nth-child(even) {
      margin-top: 5rem;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Decription = styled.p`
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 3.9px;
  text-transform: uppercase;
  white-space: nowrap;
`;
const Team = (props) => {
  return (
    <TeamContainer>
      <ImageContainer>
        <Image src={props.photo} alt="Team" />
        <P>{props.title}</P>
      </ImageContainer>
      <div style={{ writingMode: "vertical-lr" }}>
        <Decription>{props.description}</Decription>
      </div>
    </TeamContainer>
  );
};

export default Team;
