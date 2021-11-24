import React, { MouseEvent } from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import expand from "../../assets/icon/Expand.png";
import collapse from "../../assets/icon/Collapse.png";
import { Expand } from "../icon/Expand";

interface AccordianItemProps {
  headerTag: string;
  headerTitle: string;
  content: string;
  onClick: (e: MouseEvent, buttonClicked: "expand" | "collapse") => void;
  isOpen: boolean;
}
export const AccordianItem = (props: AccordianItemProps) => {
  const [showButton, setShowButton] = React.useState({
    plus: true,
    minus: false,
  });
  const handleClick = (e: MouseEvent, buttonClicked: "expand" | "collapse") => {
    if (props.onClick) {
      props.onClick(e, buttonClicked);
    }
    if (buttonClicked === "expand") {
      setShowButton({ plus: false, minus: true });
      return;
    }
    setShowButton({ plus: true, minus: false });
  };
  React.useEffect(() => {
    if (props.isOpen) {
      setShowButton({ plus: false, minus: true });
      return;
    }
    setShowButton({ plus: true, minus: false });
  }, [props.isOpen]);
  return (
    <Wrapper showButton={showButton} isExpanded={props.isOpen}>
      <div className="header">
        <div className="header-content">
          <h6 className="header-tag">{props.headerTag}</h6>
          <h3 className="header-title">{props.headerTitle}</h3>
        </div>
        <div className="buttons">
          <button className="expand" onClick={(e) => handleClick(e, "expand")}>
            <img src={expand} alt="expand" />
            {/* <Expand width="3.5rem" height="3.5rem" /> */}
          </button>
          <button
            className="collapse"
            onClick={(e) => handleClick(e, "collapse")}
          >
            <img src={collapse} alt="collapse" />
          </button>
        </div>
      </div>
      <div className="content">{props.content}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  showButton: { plus: boolean; minus: boolean };
  isExpanded: boolean;
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
      width: 3.5rem;
      height: 3.5rem;
      transition: ${designVariables.transition};

      .expand {
        ${(props) =>
          props.showButton.plus ? { display: "block" } : { display: "none" }}
        background: transparent;
        border: 0;
        cursor: pointer;
      }
      .collapse {
        ${(props) =>
          props.showButton.minus ? { display: "block" } : { display: "none" }}
        background: transparent;
        border: 0;
        cursor: pointer;
      }
      &:hover {
        border-radius: 100rem;
        background: #ffe7e7;
      }
    }
  }
  transition: all 1s ease-in-out;
  .content {
    padding: 2rem 5rem;
    color: ${designVariables.palette.dark400};
    font-size: 1rem;
    ${(props) =>
      props.isExpanded ? { display: "block" } : { display: "none" }}
  }
`;
