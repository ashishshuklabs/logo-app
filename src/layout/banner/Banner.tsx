import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import logo from "../../assets/images/Group 225.png";
export const Banner = () => {
  return (
    <StyledBanner>
      <div className="content">
        <h1 className="title">About Us</h1>
        <p className="description">
          Independence, informed debate, policy influence and reach.
        </p>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={logo} alt="banner logo" />
        </div>
        <div className="rectangle-top"></div>
        <div className="rectangle-bottom"></div>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 100%;
  height: 17rem;
  background: linear-gradient(225.1deg, #252932 29.16%, #050d1d 91.21%);
  margin: 3rem auto;
  display: flex;
  align-items: center;
  flex: 3 1;
  .content {
    color: ${designVariables.colorBodyText};
    padding-left: 14.5rem;
    max-width: 52rem;
    .description {
      font-size: 1.5rem;
    }
  }
  .image-container {
    position: relative;
    height: 100%;
    width: 100%;
    .image {
      width: 9.75rem;
      position: absolute;
      top: 50%;
      right: 1.25rem;
      transform: translateY(-50%);
    }
    .rectangle-top {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid ${designVariables.colorBodyText};
      border-right: 0;
      border-top: 0;
      width: 9.75rem;
      height: 15rem;
      background: transparent;
    }
    .rectangle-bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      border: 1px solid ${designVariables.colorBodyText};
      border-right: 0;
      border-bottom: 0;
      width: 8.3rem;
      height: 13rem;
      background: transparent;
    }
  }
  @media (max-width: 767px) {
    .image-container {
      display: none;
    }
    .content {
      padding-left: 1rem;
    }
  }
`;
