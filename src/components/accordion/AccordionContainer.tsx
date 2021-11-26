import React from "react";
import styled from "styled-components";
import { AccordionItem1 } from "./AccordionItem1";
import { AccordionItem2 } from "./AccordionItem2";

export const AccordionContainer = () => {
  const [isOpen, setIsOpen] = React.useState({ item1: false, item2: false });
  const handleClick = (
    e: React.MouseEvent,
    buttonClicked: "expand" | "collapse",
    item: "item1" | "item2"
  ) => {
    if (buttonClicked === "expand") {
      if (item === "item1") {
        setIsOpen({ item1: true, item2: false });
        return;
      }
      setIsOpen({ item1: false, item2: true });
    }
    if (buttonClicked === "collapse") {
      if (item === "item1") {
        setIsOpen({ ...isOpen, item1: false });
        return;
      }
      setIsOpen({ ...isOpen, item2: false });
    }
  };
  return (
    <StyledAccordianSection>
      <AccordionItem1
        isOpen={isOpen.item1}
        onClick={(e: React.MouseEvent, buttonClicked: "expand" | "collapse") =>
          handleClick(e, buttonClicked, "item1")
        }
      />
      <AccordionItem2
        isOpen={isOpen.item2}
        onClick={(e: React.MouseEvent, buttonClicked: "expand" | "collapse") =>
          handleClick(e, buttonClicked, "item2")
        }
      />
    </StyledAccordianSection>
  );
};

const StyledAccordianSection = styled.section`
  max-width: 60rem;
  padding: 0 1rem;
  width: 100%;
  min-height: 45rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
`;
