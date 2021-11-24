import React from "react";
import styled from "styled-components";

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
        <div className="image"></div>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 100%;
  height: 23rem;
  background: linear-gradient(225.1deg, #252932 29.16%, #050d1d 91.21%);
  margin: 3rem auto;
`;
