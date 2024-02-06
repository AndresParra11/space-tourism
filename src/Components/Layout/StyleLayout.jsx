import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleContainer = styled.section`
  font-family: var(--font-primary);
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyleNavContainer = styled.nav`
  display: flex;
  align-items: center;

  position: absolute;
  overflow: hidden;
  width: 100vw;
  top: 5%;
  left: 5%;
  @media only screen and (max-width: 700px) {
    top: 2%;
  }

  @media only screen and (max-width: 760px) {
    top: 0 !important;
  }

  @media only screen and (max-width: 1000px) {
    top: 1%;
  }
`;

export const StyleLogo = styled.div`
  flex: 0 1 20%;
`;

export const StyleNavLine = styled.div`
  position: absolute;
  width: 28%;
  height: 1px;
  left: 5%;
  z-index: 10;

  background-color: var(--color-terciary);
  mix-blend-mode: normal;
  opacity: 0.25;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const StyleNavLinksContainer = styled.div`
  flex: 80%;
  min-height: 9.6rem;
  margin-left: 15%;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);

  display: flex;
  align-items: center;

  justify-content: space-between;
  padding-left: 5%;
  padding-right: 20%;

  @media only screen and (max-width: 1000px) {
    flex: 1;
    padding-right: 10%;
    padding-left: 10%;
    margin-left: 10%;
  }

  @media only screen and (max-width: 850px) {
    padding-right: 5%;
    padding-left: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media only screen and (max-width: 760px) {
    min-height: 8rem;
  }

  @media only screen and (max-width: 700px) {
    background-color: transparent;
    backdrop-filter: none;
  }
`;

export const StyleNavLinkItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #fff;
  }

  span {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 19.2px;
    letter-spacing: 2.7px;
    color: #fff;
    margin-right: 1rem;

    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }

  @media only screen and (max-width: 1000px) {
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const StyleHamburguer = styled.div`
  display: none;
  img {
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    display: block;
    margin-left: auto;
    margin-top: 5%;
    padding: 5%;
  }
`;

export const StyleNavlink = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 2.7px;
  color: #fff;
  text-decoration: none;
  @media only screen and (max-width: 760px) {
    font-size: 1.4rem;
  }
`;
