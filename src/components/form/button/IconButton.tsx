import React from "react";
import styled from "styled-components";
import { callbackify } from "util";
import { designVariables } from "../../../styles/globalVariables";

export const IconButton = (props: {
  width?: string;
  height?: string;
  hoverColor?: string;
  svgImage: JSX.Element;
}) => {
  return (
    <Wrapper {...props}>
      {props.svgImage}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  width?: string;
  height?: string;
  hoverColor?: string;
}>`
  ${(props) =>
    props.width && {
      width: `calc(${props.width} + 1rem)`,
      height: `calc(${props.height} + 1rem)`,
    }}
  position: relative;
  transition: ${designVariables.transition};
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
  }
  &:hover {
    border-radius: 50rem;
    background: ${(props) =>
      props.hoverColor ? props.hoverColor : "transparent"};
  }
`;
