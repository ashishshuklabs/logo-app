import React from "react";
import styled from "styled-components";
import { callbackify } from "util";
import { designVariables } from "../../styles/globalVariables";

export const Search = (props: {
  width?: string;
  height?: string;
  hoverColor?: string;
}) => {
  return (
    <Wrapper {...props}>
      <svg
        className="image"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.7067 22.293L16.8818 15.468C18.2038 13.835 18.9998 11.76 18.9998 9.50002C18.9998 4.26202 14.7378 0 9.49986 0C4.26192 0 0 4.26197 0 9.49997C0 14.738 4.26197 19 9.49991 19C11.7599 19 13.8349 18.204 15.4678 16.882L22.2928 23.707C22.4878 23.902 22.7437 24 22.9998 24C23.2558 24 23.5118 23.902 23.7068 23.707C24.0978 23.316 24.0978 22.684 23.7067 22.293ZM9.49991 17C5.36394 17 1.99999 13.636 1.99999 9.49997C1.99999 5.36395 5.36394 1.99997 9.49991 1.99997C13.6359 1.99997 16.9998 5.36395 16.9998 9.49997C16.9998 13.636 13.6358 17 9.49991 17Z"
          fill="#252932"
        />
      </svg>
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
