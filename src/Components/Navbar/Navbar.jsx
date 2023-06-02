import React from "react";
import Close from "../../assets/icon/close.svg";
import {
  StileMenuContainer,
  StileMenuLinks,
  StileMenuLinksItem,
  StyleClose,
} from "./StyleNavbar";
import { StyleNavlink } from "../Layout/StyleLayout";

//El componente 'Navbar' recibe 'handleMenuDisplay' como una 'prop', que es una función proporcionada por el componente padre 'Layout' para controlar la visibilidad del menú.
const Navbar = ({ handleMenuDisplay }) => {
  return (
    <>
      <StileMenuContainer>
        <StileMenuLinks>
          <StyleClose id="close" onClick={handleMenuDisplay}>
            <img src={Close} alt="close" />
          </StyleClose>
          <StileMenuLinksItem to="/" id="home">
            <span>00</span>
            <StyleNavlink>Home</StyleNavlink>
          </StileMenuLinksItem>

          <StileMenuLinksItem to="/destination" id="destination">
            <span>01</span>
            <StyleNavlink>Destination</StyleNavlink>
          </StileMenuLinksItem>

          <StileMenuLinksItem to="/crew" id="crew">
            <span>02</span>
            <StyleNavlink>Crew</StyleNavlink>
          </StileMenuLinksItem>

          <StileMenuLinksItem to="/technology" id="technology">
            <span>03</span>
            <StyleNavlink>Technology</StyleNavlink>
          </StileMenuLinksItem>
        </StileMenuLinks>
      </StileMenuContainer>
    </>
  );
};

export default Navbar;
