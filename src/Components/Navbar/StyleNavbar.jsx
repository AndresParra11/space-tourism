import styled from "styled-components";
import { Link } from "react-router-dom";

export const StileMenuContainer = styled.section`
  @media only screen and (max-width: 700px) {
    font-family: var(--font-primary);

    position: absolute;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(41px);
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    z-index: 100;
    transition: all 2s ease-in-out;
  }
`;
export const StileMenuLinks = styled.section`
  @media only screen and (max-width: 700px) {
    font-family: var(--font-primary);

    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
export const StyleClose = styled.section`
  @media only screen and (max-width: 700px) {
    font-family: var(--font-primary);

    margin-bottom: 10%;
    padding: 2%;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    img {
      &:hover {
        cursor: pointer;
      }
    }

    #close {
      align-self: flex-end;
      margin-top: 5%;
      padding: 5%;
    }
  }
`;

export const StileMenuLinksItem = styled(Link)`
  @media only screen and (max-width: 700px) {
    font-family: var(--font-primary);

    margin-bottom: 10%;
    padding: 2%;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;

    span {
      font-family: var(--font-primary);
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 19.2px;
      letter-spacing: 2.7px;
      color: #fff;
      margin-right: 1rem;
    }
  }
`;
