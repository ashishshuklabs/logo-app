import React from "react";
import styled from "styled-components";
import { Landing } from "..";
import { Footer } from "../../layout";
import { designVariables } from "../../styles/globalVariables";

export const Main = () => {
  return (
    <PageContainer>
      <Landing />
      <Footer />

    </PageContainer>
  );
};
const PageContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  background: ${designVariables.colorBodyBg};
  overflow: hidden;
`;
