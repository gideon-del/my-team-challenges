import React from "react";
import Team from "./Team";
import photo2 from "../../Images/photo2.png";
import photo1 from "../../Images/photo1.png";
import photo3 from "../../Images/photo3.png";
import photo4 from "../../Images/photo4.png";
import photo5 from "../../Images/photo5.png";
import photo6 from "../../Images/photo6.png";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: min(80%, 1200px);
  margin-inline: auto;
  gap: 2rem;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 704px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
  }
`;
const photos = [
  {
    photo: photo1,
    title: "Bill Mahoney",
    description: "Product owner",
  },
  {
    photo: photo2,
    title: "Saba Cabrera",
    description: "Art director",
  },
  {
    photo: photo3,
    title: "Shae Le",
    description: "Tech Lead",
  },
  {
    photo: photo4,
    title: "Skylah Lu",
    description: "UX Designer",
  },
  {
    photo: photo5,
    title: "Griff Richards",
    description: "Developer",
  },
  {
    photo: photo6,
    title: "Stan John",
    description: "Developer",
  },
];

const TeamsCointainer = () => {
  return (
    <Container>
      {photos.map((photo) => (
        <Team
          photo={photo.photo}
          title={photo.title}
          description={photo.description}
        />
      ))}
    </Container>
  );
};

export default TeamsCointainer;
