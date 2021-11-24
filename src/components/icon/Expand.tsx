import React from "react";
import styled from "styled-components";
import { callbackify } from "util";
import { designVariables } from "../../styles/globalVariables";
import { IconButton } from "../form/button/IconButton";

export const Expand = (props: {
  width?: string;
  height?: string;
  hoverColor?: string;
}) => {
  const iconSvg = () => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="26" width="3" height="56" rx="1.5" fill="#252932" />
      <rect
        x="56"
        y="26"
        width="3"
        height="56"
        rx="1.5"
        transform="rotate(90 56 26)"
        fill="#252932"
      />
    </svg>
  );
  return <IconButton svgImage={iconSvg()} {...props} />;
};
