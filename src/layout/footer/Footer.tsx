import React from "react";
import styled from "styled-components";
import { Form } from "../../components/form/Form";
import { designVariables } from "../../styles/globalVariables";
import { FormWithNews } from "./FormWithNews";
import { Information } from "./Information";

export const Footer = () => {
  return (
    <StyledFooter>
      <Information />
      <FormWithNews />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 100%;
  width: 100%;
  background-color: ${designVariables.colorFooterBg};
  overflow: hidden;
`;
