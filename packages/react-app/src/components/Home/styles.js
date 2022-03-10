import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  color: #E7B83D;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 993px) {
    padding: 50px 30px;
  }
`;

export const InnerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 769px) {
    margin: auto;
    flex-direction: row;
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1500px;
    margin: 0 auto;
  }
`;

export const TextWrapper = styled.div`
  margin: auto;
  width: 100%;

  @font-face {
    font-family: LuloClean;
    src: url("./Lulo Clean W01 One Bold.ttf");
  }

  > h1 {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 36px;
    color: #E7B83D;
    font-family: LuloClean;

    @media (max-width: 768px) {
      font-size: 50px !important;
    }
  }

  > h2 {
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-style: italic;
    font-weight: bold;
    color: #E7B83D;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 40px;
    }

    > h2 {
      font-size: 36px;
    }
  }

  @media (min-width: 1024px) {
    > h1 {
      font-size: 57px;
    }

    > h2 {
      font-size: 52px;
    }
  }

  @media (min-width: 1200px) {
    > h1 {
      font-size: 62px;
    }

    > h2 {
      font-size: 60px;
    }
  }

  @media (min-width: 1440px) {
    > h1 {
      font-size: 75px;
      line-height: 106px;
    }

    > h2 {
      font-size: 70px;
    }
  }
`;

export const NFTContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: auto;

  p {
    font-weight: 300;
    font-size: 24px;
    margin: 0px;
  }

  button {
    background: #E7B83D;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    padding: 0px 15px;
    transition: all 0.3s linear;
    color: black;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    height: 50px;

    &:hover {
      background-color: #E7B83D;
      box-shadow: 0 0 10px #E7B83D;
      color: black;
    }
  }

  .mint_count {
    background-color: transparent;
    border: 3px solid #E7B83D;
    border-radius: 12px;
    color: #E7B83D;
    padding: 5px 50px;
    font-size: 35px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    p {
      font-size: 28px;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1440px) {
    p {
      font-size: 36px;
    }
  }
`;

export const StepWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  button {
    background: #E7B83D;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    height: 50px;
    transition: all 0.3s linear;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #E7B83D;
      box-shadow: 0 0 10px #E7B83D;
      color: black;
    }
  }

  .back {
    background: #E7B83D;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    padding: 9px 30px !important;
    transition: all 0.3s linear;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #E7B83D;
      box-shadow: 0 0 10px #E7B83D;
      color: black;
    }

    &:focus,
    &:active {
      text-decoration: none;
      background: #E7B83D !important;
    }

    &.ant-btn:focus {
      color: black !important;
      background: #E7B83D !important;
      border: none !important;
    }
  }

`;

export const ButtonOpensea = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
    
  button {
    background: #E7B83D;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    height: 50px;
    transition: all 0.3s linear;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #E7B83D;
      box-shadow: 0 0 10px #E7B83D;
      color: black;
    }
  }

  .opensea {
    background: #E7B83D;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    padding: 9px 30px !important;
    transition: all 0.3s linear;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: #E7B83D;
      box-shadow: 0 0 10px #E7B83D;
      color: black;
    }

    &:focus,
    &:active {
      text-decoration: none;
      background: #E7B83D !important;
    }

    &.ant-btn:focus {
      color: black !important;
      background: #E7B83D !important;
      border: none !important;
    }
  }
`;


export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  .banner_img {
    position: absolute;
    left: -77px;
    top: 36px;
    width: 15%;
    z-index: -1;

    @media (max-width: 1440px) {
      left: 0px;
      top: 36px;
      width: 15%;
    }
    @media (max-width: 1368px) {
      left: 0px;
      top: 36px;
      width: 20%;
    }
    @media (max-width: 1024px) {
      left: 39px;
      top: 36px;
      width: 25%;
    }

    @media (max-width: 768px) {
      left: 39px;
      top: 36px;
      width: 30%;
    }

    @media (max-width: 500px) {
      left: 39px;
      top: 36px;
      width: 40%;
    }
  }

  .hero_img {
    @media (max-width: 600px) {
      position: absolute;
      z-index: -2;
    }

    @media (max-width: 768px) {
      position: absolute;
      z-index: -2;
    }

    @media (max-width: 1024px) {
      margin-left: 90px;
    }

    @media (max-width: 1200px) {
      margin-left: 30px;
    }

    @media (max-width: 1440px) {
    }
  }
`;

export const ProgressBarContainer = styled.ul`
  padding: 0px;
  width: 100%;
  margin-top: -4px;

  @media (min-width: 768px) {
    margin-top: -8px;
  }
`;

export const PointWrapper = styled.li`
  list-style-type: none;
  width: 25%;
  float: left;
  position: relative;
  background: rgba(66, 63, 81, 0.55);

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &::before {
    content: "";
    counter-increment: step;
    display: block;
    text-align: center;
    margin: 20px auto 20px auto;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    min-width: 30px;
    box-sizing: border-box;
    border: 5px solid #c4c4c4;
    background: #c4c4c4;
  }

  &:not(:first-child)::after {
    width: 100%;
    height: 4px;
    content: "";
    position: absolute;
    background-color: #c4c4c4;
    top: 33px;
    left: -50%;
    z-index: -1;
  }

  ${({ active }) =>
    active &&
    css`
      &::before {
        background: #f6560f;
        border: 5px solid #f6560f;
      }
      &:not(:first-child)::after {
        background-color: #f6560f;
      }
    `}
`;
