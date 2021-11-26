import React, { MouseEvent, useState } from "react";
import styled, { keyframes } from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { Expand } from "../form/button/Expand";
import { Collapse } from "../form/button/Collapse";

interface AccordionProps {
  headerTag: string;
  headerTitle: string;
  content: string;
  onClick: (e: MouseEvent, buttonClicked: "expand" | "collapse") => void;
  isOpen: boolean;
  animation?: boolean;
}
export const Accordion = (props: AccordionProps) => {
  const { animation = true } = props;
  const [showButton, setShowButton] = React.useState({
    plus: true,
    minus: false,
  });
  const [showHide, setShowHide] = useState<"show" | "hide">("hide");
  const handleClick = (e: MouseEvent, buttonClicked: "expand" | "collapse") => {
    if (props.onClick) {
      props.onClick(e, buttonClicked);
    }
    if (buttonClicked === "expand") {
      setShowButton({ plus: false, minus: true });
      setShowHide("show");
      return;
    }
    setShowButton({ plus: true, minus: false });
    setShowHide("hide");
  };
  React.useEffect(() => {
    if (props.isOpen) {
      setShowButton({ plus: false, minus: true });
      setShowHide("show");
      return;
    }
    setShowButton({ plus: true, minus: false });
    setShowHide("hide");
  }, [props.isOpen]);
  return (
    <Wrapper
      animation={animation}
      showButton={showButton}
      isExpanded={props.isOpen}
    >
      <div className="header">
        <div className="header-content">
          <h6 className="header-tag">{props.headerTag}</h6>
          <h3 className="header-title">{props.headerTitle}</h3>
        </div>
        <div className="buttons">
          <div className="wrapper">
            <Expand
              width="3.5rem"
              height="3.5rem"
              onClick={(e) => handleClick(e, "expand")}
              className="expand"
            />
            <Collapse
              width="3.5rem"
              height="3.5rem"
              onClick={(e) => handleClick(e, "collapse")}
              className="collapse"
            />
          </div>
        </div>
      </div>
      <div className={`content ${showHide} `}>{props.content}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  showButton: { plus: boolean; minus: boolean };
  isExpanded: boolean;
  animation: boolean;
}>`
  width: 100%;
  margin: 2rem auto;
  border: 1px solid ${designVariables.palette.dark300};
  text-align: justify;
  .header {
    display: flex;
    background-color: ${designVariables.colorContentBg};
    min-height: 9.5rem;
    height: 100%;
    align-items: center;
    justify-content: space-around;

    &-tag {
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 700;
      color: ${designVariables.palette.dark900};
    }
    &-title {
      max-width: 44rem;
      font-weight: 300;
      color: ${designVariables.palette.dark400};
      letter-spacing: 1px;
    }

    .buttons {
      .wrapper {
        width: 4.5rem;
        height: 4.5rem;
        transition: ${designVariables.transition};
        position: relative;
        &:hover {
          border-radius: 100rem;
          background: #ffe7e7;
        }
      }

      button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3.5rem;
        height: 3.5rem;
      }
      .expand {
        ${(props) =>
          props.showButton.plus ? { display: "block" } : { display: "none" }}
      }
      .collapse {
        ${(props) =>
          props.showButton.minus ? { display: "block" } : { display: "none" }}
      }
    }
  }
  transition: ${(props) => props.animation && "all 1s ease-in-out"};
  .content {
    padding: 2rem 5rem;
    color: ${designVariables.palette.dark400};
    font-size: 1rem;
    transition: all 0.5s linear;
    &.show {
      opacity: 1;
      height: 100%;
      padding: 2rem 5rem;
      /* display: block; */
    }
    &.hide {
      opacity: 0;
      height: 0;
      padding: 0;
    }
    /* ${(props) =>
      props.isExpanded
        ? { opacity: 1 }
        : { opacity: 0, height: 0, padding: 0 }} */
  }
  @media (max-width: 767px) {
    .header {
      justify-content: space-between;
      padding-left: 1rem;
      &-title {
        max-width: 30rem;
        font-size: 1.125rem;
      }
    }
  }
`;
