import styled from "styled-components";
import Technology from "../../assets/img/technology/background-technology-desk.jpg";
import MobileTechnology from "../../assets/img/technology/background-technology-mobile.jpg";

export const StyleBackground = styled.div`
  background-image: url(${Technology});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  overflow: hidden;

  @media only screen and (max-width: 700px) {
    background-image: url(${MobileTechnology});
  }
`;

export const TechTitle = styled.div`
  position: absolute;
  top: 22%;
  left: 10%;
  width: 40%;

  display: flex;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    top: 10%;
    left: 5%;
    font-size: 2rem;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    left: 0;
    justify-content: center;
    top: 15%;
  }
  span {
    font-weight: 700;
    font-size: 2.8rem;
    color: var(--color-terciary);
    letter-spacing: 4px;
    opacity: 0.25;
    margin-right: 2%;

    @media only screen and (max-width: 1000px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
    }
  }
  p {
    font-weight: 400;
    font-size: 2.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--color-terciary);

    @media only screen and (max-width: 1000px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
    }
  }
`;

export const StyleTechContent = styled.div`
  position: absolute;
  top: 29%;
  left: 10%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    top: 20%;
    left: 0;
    flex-direction: column;
  }
  @media only screen and (max-width: 700px) {
    top: 25%;
  }
`;

export const StyleTechContentLeft = styled.div`
  flex: 0 1 50%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    max-width: 100vw;
  }
`;

export const StyleTechImg = styled.img`
  display: none;

  @media only screen and (max-width: 1000px) {
    display: block;
    width: 100%;
    height: 35rem;
  }
  @media only screen and (max-width: 700px) {
    height: 17rem;
  }
`;

export const StyleTechContentLeft1 = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  }
`;

export const StyleTechCircle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  /* background-color: var(--color-white); */

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 35%;
  }
  &:hover {
    border: 1px solid #ffff;
  }
  span {
    font-family: var(--font-primary);
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
    color: var(--color-terciary);
    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 6rem;
    height: 6rem;
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 4%;
    }
  }
  @media only screen and (max-width: 700px) {
    height: 4rem;
    width: 4rem;
  }
`;

export const StyleTechContentLeft2 = styled.div`
  margin-left: 10%;

  @media only screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: center;
    margin-top: 5%;
  }
  h1 {
    font-family: var(--font-primary);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-terciary);
    font-size: 5rem;

    @media only screen and (max-width: 700px) {
      font-size: 2.5rem;
    }
  }
`;

export const TechContentTitle = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 2px;
  color: var(--color-secondary);
  margin-bottom: 2%;
  @media only screen and (max-width: 700px) {
    font-size: 1.4rem;
  }

  h1 {
    @media only screen and (max-width: 1000px) {
      font-size: 4rem;
    }
  }
`;

export const TechDescription = styled.p`
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3.2rem;
  text-transform: none;
  color: var(--color-secondary);
  margin-top: 5%;
  width: 90%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 0 12%;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    padding: 0 5%;
  }
`;

export const StyleTechRight = styled.div`
  flex: 0 1 50%;

  img {
    display: block;
    width: 80%;
    height: 50rem;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
