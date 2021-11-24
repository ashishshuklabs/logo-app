import React from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";
interface InputTextProps {
  label: string;
  required?: boolean;
  inputType: "text" | "email" | "tel";
  width: string;
}
export const InputText = (props: InputTextProps) => {
  return (
    <StyledInput
      type={props.inputType || "text"}
      name="first-name"
      className="first-name"
      placeholder={`${props.label}${props.required ? "*" : ""}`}
      required={props.required}
      width={props.width}
    />
  );
};

const StyledInput = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  border: 0;
  background-color: transparent;
  color: ${designVariables.colorTextPrimary};
  border-bottom: 2px solid ${designVariables.colorTextPrimary};
  font-size: 1rem;
  font-style: italic;
  transition: ${designVariables.transition};
  &:focus {
    border: 0;
    outline: none;
    border-bottom: 2px solid ${designVariables.palette.red100};
  }
`;