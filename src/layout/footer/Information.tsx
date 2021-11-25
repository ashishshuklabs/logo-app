import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";

export const Information = () => {
  return (
    <StyledInformation>
      <div className="grid-2">
        <p className="text">
          We acknowledge the Traditional Owners of country throughout Australia
          and recognise their continuing connection to land, waters and culture.
          We pay our respects to their Elders past, present and emerging.
        </p>
        <ul className="list-container">
          <li className="list-item bold">
            Telephone<span>+61 3 9662</span>
          </li>
          <li className="list-item bold space-bottom">
            Email<span>info@logo.com.au</span>
          </li>
          <li className="list-item">Terms and conditions</li>
          <li className="list-item">events policy</li>
          <li className="list-item">careers</li>
          <li className="list-item">contact</li>
        </ul>
      </div>
      <div className="line-break"></div>
    </StyledInformation>
  );
};

const StyledInformation = styled.div`
  width: 100%;
  .grid-2 {
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 3.5fr 2.5fr;
    color: ${designVariables.colorTextPrimary};
  }
  .line-break {
    width: 100%;
    height: 1px;
    background-color: ${designVariables.colorTextPrimary};
  }
  .text {
    opacity: 0.8;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 300;
    padding: 0 4rem;
    text-align: left;
  }
  .list-container {
    padding: 0 4rem;
  }
  .list-item {
    line-height: 2;

    font-size: 1rem;
    font-weight: 500;
    &.bold {
      font-weight: 700;
    }
    span {
      padding-left: 0.4rem;
      font-weight: 500;
    }
    &.space-bottom {
      padding-bottom: 1rem;
    }
  }
  @media (max-width: 767px) {
    .grid-2 {
      grid-template-columns: 1fr;
    }
    .text {
      margin-bottom: 2rem;
    }
  }
`;
