import React from "react";
import styled from "styled-components";
import { IconTextButton } from "../../components/form/button/IconTextButton";
import { designVariables } from "../../styles/globalVariables";
import phone from "../../assets/icon/Phone.png";
import ceda from "../../assets/icon/CEDA.png";
import avatar from "../../assets/icon/Avatar.png";
import support from "../../assets/icon/Support.png";
import { Search } from "../../components/icon/Search";
import { TextButton } from "../../components/form/button/TextButton";
import logo from "../../assets/images/Vector.png";
import hamburger from "../../assets/icon/Group 190.png";
const StyledNav = styled.nav`
  position: relative;
  max-width: 100%;
  height: 6rem;
  background: ${designVariables.colorNavbarBg};
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${designVariables.palette.red100};
  }
  .logo-container {
    padding: 0 1.5rem;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    height: 100%;

    .top-row {
      display: flex;
      justify-content: flex-end;
      .transparent-button-wrapper {
        display: flex;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: ${designVariables.palette.red100};
        }
      }
    }
    .bottom-row {
      display: flex;
      margin-bottom: 0.15rem;
      align-items: center;
      justify-content: center;
      margin: auto 0;
      .icon-button {
        margin: 0 0.5rem;
        cursor: pointer;
        padding: 0;
        border: none;
        outline: none;
        background: transparent;
      }
    }
  }
  .mobile-menu {
    display: none;
  }
  @media (max-width: 767px) {
    .button-container {
      display: none;
    }

    .mobile-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 1rem;
      width: 100%;
      .icon-button {
        margin: 0 2rem;
        cursor: pointer;
        padding: 0;
        border: none;
        outline: none;
        background: transparent;
        order: 0;
      }

      .hamburger {
        width: 2rem;
        height: 2rem;
        margin: 0 1rem;
        order: -1;
      }
    }
  }
`;
export const Navigation = () => {
  const SearchButton = () => (
    <button className="icon-button">
      <Search
        hoverColor={designVariables.palette.light300}
        height="1.5rem"
        width="1.5rem"
      />
    </button>
  );
  return (
    <StyledNav>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="mobile-menu">
        <SearchButton />
        <img src={hamburger} alt="mobile menu" className="image" />
      </div>
      <div className="button-container">
        <div className="top-row">
          <div className="text-icon-button">
            <IconTextButton
              color={designVariables.palette.lightGreen100}
              hoverColor="#c1d748"
              title="join us"
              icon={<img src={ceda} alt="join us" />}
              iconPosition="left"
              width="8rem"
            />
          </div>
          <div className="transparent-button-wrapper">
            <div className="text-icon-button ">
              <IconTextButton
                color="transparent"
                hoverColor={designVariables.palette.light300}
                title="sign in"
                icon={<img src={avatar} alt="user" />}
                iconPosition="left"
                width="8rem"
              />
            </div>
            <div className="text-icon-button ">
              <IconTextButton
                color="transparent"
                hoverColor={designVariables.palette.light300}
                title="support us"
                icon={<img src={support} alt="support" />}
                iconPosition="left"
                width="8rem"
              />
            </div>
            <div className="text-icon-button ">
              <IconTextButton
                color="transparent"
                hoverColor={designVariables.palette.light300}
                title="contact"
                icon={<img src={phone} alt="phone" />}
                iconPosition="left"
                width="8rem"
              />
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <TextButton
            onClick={() => {}}
            title="Research and policy"
            withIcon={false}
            color={designVariables.colorNavbarText}
            hoverColor={designVariables.palette.red100}
          />
          <TextButton
            onClick={() => {}}
            title="Membership"
            withIcon={false}
            color={designVariables.colorNavbarText}
            hoverColor={designVariables.palette.red100}
          />
          <TextButton
            onClick={() => {}}
            title="Projects and partnerships"
            withIcon={false}
            color={designVariables.colorNavbarText}
            hoverColor={designVariables.palette.red100}
          />
          <TextButton
            onClick={() => {}}
            title="Events and programs"
            withIcon={false}
            color={designVariables.colorNavbarText}
            hoverColor={designVariables.palette.red100}
          />
          <TextButton
            onClick={() => {}}
            title="News and resources"
            withIcon={false}
            color={designVariables.colorNavbarText}
            hoverColor={designVariables.palette.red100}
          />
          <TextButton
            onClick={() => {}}
            title="About"
            withIcon={false}
            color={designVariables.colorNavbarText}
            hoverColor={designVariables.palette.red100}
          />
          <SearchButton />
        </div>
      </div>
    </StyledNav>
  );
};
