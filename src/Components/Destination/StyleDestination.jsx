import styled from "styled-components"

export const StyleDestinationRightOne = styled.div`
h1 {
  font-family: "Bellefair", serif;
  font-weight: 400;
  font-size: 8rem;
  color: var(--color-terciary);
  text-transform: uppercase;
  margin-bottom: 5%;

  @media only screen and (max-width: 700px){
    font-size: 5rem;
  color: var(--color-terciary);
  }
}
`

export const StyleDestinationRightTwo = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 8%;

  p {
  font-size: 1.6rem;
  color: var(--color-terciary);
  font-weight: 400;
  /* font-size: 62.5%; */
  font-family: var(--font-primary);
  line-height: 32px;
  width: 80%;
  height: 80%;

  @media only screen and (max-width: 1000px){
    width: 100%;
  color: var(--color-terciary);
    text-align: center;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  color: var(--color-terciary);
  }
}
`

export const StyleDestinationLine = styled.div`
  border-bottom: 1px solid #383b4b;
  width: 80%;

  @media only screen and (max-width: 1000px){
    width: 100%;
  }
`

export const StyleDestinationRightTre = styled.div`
  display: flex;
  padding: 5%;
  
  div {
  margin-right: 15%;

  @media only screen and (max-width: 700px) {
    margin-bottom: 10%;
  }

  span {
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10%;

    @media only screen and (max-width: 700px) {
      margin-bottom: 5%;
    }
  }

  p {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 2.5rem;
    color: var(--color-terciary);
    text-transform: uppercase;
  }
  }

  @media only screen and (max-width: 1000px){
    justify-content: center;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`