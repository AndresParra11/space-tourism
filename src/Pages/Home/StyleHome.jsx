import styled from "styled-components";
import homeBackgroundDesktop from "../../assets/img/home/background-home-desktop.jpg";
import homeBackgroundTablet from "../../assets/img/home/background-home-tablet.jpg";
import homeBackgroundMobile from "../../assets/img/home/background-home-mobile.jpg";

export const StyleHome = styled.div`
  background-image: url(${homeBackgroundDesktop});
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 350px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  padding-top: 200px;
  @media only screen and (max-width: 1125px) {
    gap: 180px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-image: url(${homeBackgroundTablet});
    background-size: cover;
    background-position: center;
    gap: 0;
    padding-top: 140px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 700px) {
    background-image: url(${homeBackgroundMobile});
    overflow-y: auto;
  }
`;

export const ContainerInfoHome = styled.div`
  width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    width: 360px;
  }
`;

export const SubTitleHome = styled.h3`
  font-size: 28px;
  color: var(--color-terciary);
  font-weight: 400;
  line-height: 33.6px;
  letter-spacing: 4.72px;
  font-family: var(--font-primary);
  color: #d0d6f9;
  &:hover {
    cursor: default;
  }
  @media only screen and (max-width: 760px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 3.375px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 2.7px;
  }
`;

export const TitleHome = styled.h1`
  font-size: 150px;
  color: var(--color-terciary);
  font-weight: 400;
  line-height: 171.9px;
  font-family: var(--font-terciary);
  &:hover {
    cursor: default;
  }
  @media only screen and (max-width: 760px) {
    padding-top: 24px;
    font-size: 150px;
    line-height: 150px;
    text-align: center;
  }
  @media only screen and (max-width: 700px) {
    font-size: 80px;
    text-align: center;
  }
`;

export const DetailsHome = styled.p`
  font-size: 18px;
  color: var(--color-terciary);
  font-weight: 400;
  line-height: 32px;
  font-family: var(--font-fourth);
  text-align: justify;
  color: #d0d6f9;
  &:hover {
    cursor: default;
  }
  @media only screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
  @media only screen and (max-width: 700px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export const ContainerImagenHome = styled.div`
  position: relative;
  width: 275px;
  height: 275px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 760px) {
    width: 200px;
    height: 200px;
    margin-top: 40px;
  }

  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 150px;
    margin-top: 120px;
  }
`;

export const FigureHome = styled.figure`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const ImgHome = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    mix-blend-mode: normal;

    @media only screen and (max-width: 1125px) {
      box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1);
    }

    @media only screen and (max-width: 760px) {
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.1);
    }
  }
`;

export const ExploreText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-terciary);
  font-style: normal;
  font-weight: 400;
  color: black;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 760px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 1.5px;
    text-align: center;
  }
  @media only screen and (max-width: 700px) {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 1.25px;
  }
`;
