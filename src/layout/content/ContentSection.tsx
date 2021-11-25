import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { Accordian, Tile1, Tile2, Tile3 } from "../../components";
import { Banner } from "../banner/Banner";
import { ContentTextBlock } from "../content-text-block/ContentTextBlock";
export const ContentSection = () => {
  return (
    <Container>
      <Banner />
      <ContentTextBlock />
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
