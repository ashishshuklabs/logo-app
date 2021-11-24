import React from "react";
import { Content, Footer, Navigation } from "../../layout";
import styled from "styled-components";

export const Landing = () => {
  return (
    <LandingWrapper>
      <Navigation />
      <Content />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.main`
  position: relative;
  width: 100%;
`;
