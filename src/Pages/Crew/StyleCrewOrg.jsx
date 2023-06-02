import styled from "styled-components"
import Test from '../../assets/img/crew/background-crew-desktop.jpg'

export const StyleBackground = styled.div`
background-image: url(${Test});
width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

overflow: hidden;
`
//

export const StyleCrewPage = styled.div`

`
//

export const StyleCrewRight = styled.div`
flex: 60%;

display: flex;
flex-direction: column;

@media only screen and (max-width: 700px){
  span {
    font-size: 1.6rem;
  }
}
`
//  margin-top: 5%;
// padding: 10%;
// display: flex;

// @media only screen and (max-width: 1000px){
//   flex-direction: column;

//   margin-top: 0;
// }

// @media only screen and (max-width: 700px){
//   padding-top: 25%;
//   padding-Left: 10%;
//   padding-Right: 10%;
//   padding-bottom: 10%;
//   height: 100%;
//   overflow-y: scroll;
// }

export const StyleCrewRightOne = styled.div`

`
//  display: flex;
// margin-bottom: 15%;

// span {
// display: block;
// color: var(--color-terciary);
// opacity: 0.25;
// font-weight: 700;
// font-size: 2.5rem;
// line-height: 3.5rem;
// letter-spacing: 4px;
// mix-blend-mode: normal;
// margin-Left: 2%;
// font-family: var(--font-primary);
// }

// p {
// font-weight: 400;
// font-size: 2.5rem;
// line-height: 3.4rem;
// letter-spacing: 4px;
// text-transform: uppercase;
// color: var(--color-terciary);
// font-family: var(--font-primary);

// @media only screen and (max-width: 700px){
//   font-size: 1.6rem;
// }
// }

// @media only screen and (max-width: 1000px) {
// padding-top: 10%;
//   transform: translateX(-5%);
//   margin-bottom: 10%;
// }

// @media only screen and (max-width: 700px){
// transform: none;
// }

export const StyleCrewRightTwo = styled.div`

`
//  width: 100%;
// height: 100%;

// img {
// display: block;
// height: 40rem;
// width: 40em;
// margin-Right: 15%;
// animation-name: spin;
// animation-duration: 15000ms;
// animation-iteration-count: infinite;
// animation-timing-function: linear;

// @media only screen and (max-width: 700px){
//   width: 25rem;
//   height: 25rem;
// }
// }

// @keyframes spin {
// 0% {
//   transform: rotate(0deg);
// }
// 100% {
//   transform: rotate(100deg);
// }
// }

export const StyleCrewLeft = styled.div`

`
//  flex: 50%;
// margin-top: 5%;

// display: flex;
// flex-direction: column;

// span {
// display: block;
// font-weight: 400;
// font-size: 1.2rem;
// letter-spacing: 2px;
// font-family: var(--font-primary);
// color: var(--color-terciary);
// }

// @media only screen and (max-width: 1000px){
// text-align: center;
// }

export const StyleCrewLeftNav = styled.div`

`
//
// padding: 2%;
// display: flex;
// margin-bottom: 5%;

// @media only screen and (max-width: 1000px) {
//   justify-content: center;
// }

export const StyleCrewLeftNavPlanets = styled.div`

`
//  margin-Left: 5%;
// padding-bottom: 2%;
// font-weight: 400;
// font-size: 1.6rem;
// line-height: 19px;
// letter-spacing: 2px;
// color: var(--color-terciary);
// text-transform: uppercase;
// text-decoration: none;
// cursor: pointer;
// border-bottom: 1px solid transparent;
// font-family: var(--font-primary);

// &:hover {
// border-bottom: 1px solid var(--color-terciary);
// }

// @media only screen and (max-width: 700px){
// font-size: 1.4rem;
// }