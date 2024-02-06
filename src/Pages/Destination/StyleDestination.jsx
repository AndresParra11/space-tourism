import styled from "styled-components";
import Test from "../../assets/img/destination/background-destination.jpg";

export const StyleBackground = styled.div`
  background-image: url(${Test});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  overflow: hidden;
`;

export const StyleDestinationPage = styled.div`
  margin-top: 1%;
  padding: 10%;
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;

    margin-top: 0;
  }

  @media only screen and (max-width: 700px) {
    padding-top: 25%;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 10%;
    height: 100%;
    overflow-y: scroll;
  }
`;

export const StyleDestinationLeft = styled.div`
  flex: 60%;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 700px) {
    span {
      font-size: 1.6rem;
    }
  }
`;

export const StyleDestinationLeftOne = styled.div`
  display: flex;
  margin-bottom: 15%;

  span {
    display: block;
    color: var(--color-terciary);
    opacity: 0.25;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3.5rem;
    letter-spacing: 4px;
    mix-blend-mode: normal;
    margin-right: 2%;
    font-family: var(--font-primary);
  }

  p {
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3.4rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--color-terciary);
    font-family: var(--font-primary);

    @media only screen and (max-width: 700px) {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding-top: 10%;
    transform: translateX(-5%);
    margin-bottom: 10%;
  }

  @media only screen and (max-width: 700px) {
    transform: none;
  }
`;

export const StyleDestinationLeftTwo = styled.div`
  width: 100%;
  height: 100%;

  img {
    display: block;
    height: 40rem;
    width: 40em;
    margin-left: 15%;
    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @media only screen and (max-width: 700px) {
      width: 25rem;
      height: 25rem;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(100deg);
    }
  }
`;

export const StyleDestinationRight = styled.div`
  flex: 50%;
  margin-top: 5%;

  display: flex;
  flex-direction: column;

  span {
    display: block;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-family: var(--font-primary);
    color: var(--color-terciary);
  }

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const StyleDestinationRightNav = styled.div`
  padding: 2%;
  display: flex;
  margin-bottom: 5%;

  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const StyleDestinationRightNavPlanets = styled.div`
  margin-right: 5%;
  padding-bottom: 2%;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  letter-spacing: 2px;
  color: var(--color-terciary);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  font-family: var(--font-primary);

  &:hover {
    border-bottom: 1px solid var(--color-terciary);
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.4rem;
  }
`;
