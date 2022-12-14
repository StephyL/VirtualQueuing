import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  z-index: 1;
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: 120%;
  pointer-events: none;
`;

export const TooltipBox = styled.span`
  animation: tooltip 0.4s ease-in-out;
  @keyframes tooltip {
    0% {
      visibility: hidden;
      transition: all 0.4s ease-in-out;
      opacity: 0;
      bottom: 10px;
    }
    100% {
      visibility: visible;
      transition: all 0.4s ease-in-out;
      opacity: 1;
      bottom: 15px;
    }
  }
`;

export const TooltipTarget = styled.button`
  border: none;
  background: none;
  padding: 5px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;
  outline: none;

  & :focus {
    outline: none;
  }

  & > img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }
`;
