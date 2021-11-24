import React from "react";
import styled from "styled-components";
import { Form } from "../../components";
import logo from "../../assets/images/Vector-Footer.png";
import logoBg from "../../assets/images/Ellipse 130.png";
import { designVariables } from "../../styles/globalVariables";
export const FormWithNews = () => {
  return (
    <Wrapper>
      <div className="grid-2">
        <div className="form-container">
          <div className="text-container">
            <h4 className="title">Stay up to date</h4>
            <p className="description">
              Subscribe to get the latest news and insights from our weekly
              update and research releases.
            </p>
          </div>
          <Form />
        </div>
        <div className="content-container">
          <h4 className="title">Twitter feed</h4>
          <div className="logo-container">
            <div className="logo-image-wrapper">
              <img src={logo} className="image" alt="" />
              <img src={logoBg} alt="" className="image-bg" />
            </div>
            <div className="logo-content">
              <p className="title">logo</p>
              <div className="text">@logo_news</div>
            </div>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            facilisis molestie est a ultrices. Proin elementum, lorem et
            dignissim tempus, ligula arcu pellentesque sapien, a imperdiet ex
            velit at urna. Quisque ac nisi turpis. Fusce ultricies elit quis dui
            vulputate, eu maximus enim molestie.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  .grid-2 {
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 3.5fr 2.5fr;
    .form-container {
      padding: 0 4rem;
      .text-container {
        color: ${designVariables.colorBodyText};
        margin-bottom: 1rem;
        max-width: 60%;
        .text{
          font-size: 1rem;
        }
      }
    }
    .content-container {
      padding: 0 4rem;
      display: flex;
      flex-direction: column;
      .title {
        color: ${designVariables.colorTextPrimary};
        margin-bottom: 1rem;
      }
      .logo-container {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        .logo-image-wrapper {
          position: relative;
          width: 2rem;
          height: 2rem;
          .image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
          .image-bg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .logo-content {
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
          line-height: 0.75;
          margin-left: 1rem;
          & > .title {
            text-transform: uppercase;
            justify-content: center;
            margin-bottom: 0.5rem;
          }
          & > .text {
            justify-content: center;
            color: ${designVariables.palette.red100};
          }
        }
      }
    }
    .text {
      color: ${designVariables.colorTextPrimary};
      font-size: 0.75rem;
      line-height: 0.9;
      font-weight: 400;
      letter-spacing: 0.1rem;
      text-align: justify;
    }
  }
`;
