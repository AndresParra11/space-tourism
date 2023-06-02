import styled from "styled-components";

export const StyleRouteContainer = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media only screen and (max-width: 400px) {
    overflow-y: auto;
  }
`;
