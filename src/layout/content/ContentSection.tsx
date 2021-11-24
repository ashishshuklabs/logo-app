import React from "react";
import styled from "styled-components";
import bgContent from "../../../assets/images/BG-Content.png";
import { designVariables } from "../../styles/globalVariables";
import { Accordian, Tile1, Tile2, Tile3 } from "../../components";
export const ContentSection = () => {
  return (
    <Container>
      <TileContainer>
        <Tile1 />
        <Tile2 />
        <Tile3 />
      </TileContainer>
      <Accordian />
    </Container>
  );
};
const TileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
`;
const Container = styled.div`
  min-height: calc(100vh - 6rem);
  width: 100%;
  background-color: ${designVariables.colorBodyBg};
`;
