import styled from "styled-components"
import Test from '../../assets/img/crew/background-crew-desktop.jpg'

export const Background = styled.div`
  background-image: url(${Test});
  color: #fff;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: auto;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const CrewPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80vh;
  padding: 20px;
  border-radius: 15px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CrewLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;

  h1{
    font-family: var(--font-terciary);
    text-transform: uppercase;
    font-size: 2.3em;
    
  } 
  
  h2 {
    font-family: var(--font-terciary);
    text-transform: uppercase;
    font-size: 2em;
    color: #ac8e8e;
  }

  .meet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10%;

    p {
      margin-right: 15px;
      font-size: 2em;
    }

    p:first-child {
      color: #ac8e8e;
    }
  }

  .details{
  padding: 10%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  font-size: 1.5em;

    .p{
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

  }

  .bullets{
    padding: 10%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

`;

export const CrewLeftNav = styled.nav`
  display: flex;
`;

export const BulletPointContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BulletPoint = styled.div`
height: 15px;
width: 15px;
border-radius: 50%;
background-color: ${props => props.selected ? "#fff" : "#757575"}; // utiliza la prop "selected" para controlar el color
cursor: pointer;
margin: 0 15px;

&:hover {
  transform: scale(2); // esto hace que el tamaño sea el doble al pasar el mouse por encima
}
`;


export const CrewRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CrewRightOne = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Agrega el margen inferior deseado */


  img{
    width: 70%;
  }
`;
