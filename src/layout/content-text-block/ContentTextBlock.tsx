import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";

export const ContentTextBlock = () => {
  return (
    <StyledBlock>
      <div className="details">
        <div className="content-block-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          facilisis molestie est a ultrices. Proin elementum, lorem et dignissim
          tempus, ligula arcu pellentesque sapien, a imperdiet ex velit at urna.
          Quisque ac nisi turpis. Fusce ultricies elit quis dui vulputate, eu
          maximus enim molestie. Suspendisse potenti.
        </div>
        <div className="content-block-2">
          Ut sit amet urna massa. Aliquam egestas metus quis elit volutpat
          malesuada. Integer efficitur porta commodo. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut
          sed consectetur diam, non rutrum sem. Sed non euismod lorem. roin
          tincidunt sapien libero, nec dictum odio aliquet quis. Ut interdum
          arcu ut odio dictum, sit amet porta ipsum sagittis.{" "}
        </div>
        <ul className="list">
          <li className="list-item">
            Undertaking research to understand the most important issues
            Australia faces.{" "}
          </li>
          <li className="list-item">
            {" "}
            Creating platforms to inform, stimulate ideas and promote debate of
            critical issues.{" "}
          </li>
          <li className="list-item">
            Influencing decision makers by delivering compelling evidence and
            recommendations and advocating in support of our positions.
          </li>
        </ul>
      </div>
    </StyledBlock>
  );
};

const StyledBlock = styled.article`
  width: 50%;
  margin: 3rem auto;
  font-size: 1rem;
  .details {
    display: flex;
    text-align: justify;
    flex-direction: column;
    .content-block-1 {
      order: 1;
    }
    .content-block-2 {
      order: 3;
    }
    .list {
      order: 2;
      .list-item {
        color: ${designVariables.palette.dark900};
        list-style: none;
        padding: 0.5rem 2rem;
        position: relative;
        &::before {
          //Custom style for list items, a big circle.
          content: "";
          position: absolute;
          vertical-align: middle;
          top: 50%;
          left: 0%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          border-radius: 100rem;
          background: ${designVariables.palette.dark900};
        }
      }
      margin: 1rem auto;
    }
  }
`;
