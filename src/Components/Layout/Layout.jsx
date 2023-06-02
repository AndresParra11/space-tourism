import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  StyleContainer,
  StyleNavContainer,
  StyleLogo,
  StyleNavLine,
  StyleNavLinksContainer,
  StyleNavLinkItem,
  StyleNavlink,
  StyleHamburguer,
} from "./StyleLayout";
import Logo from "../../assets/icon/logo.svg";
import Hamburguer from "../../assets/icon/hamburguer.svg";
import Navbar from "../Navbar/Navbar";
import GlobalStyle from "../../Routes/StylesApp";

const Layout = () => {
  //hacemos uso del hook 'useState' para definir el estado 'showMenu', que controla la visibilidad del menú. El estado se inicializa como 'false', lo que significa que el menú está oculto inicialmente.
  const [showMenu, setShowMenu] = useState(false);

  //La función 'handleMenuDisplay' se utiliza para alternar el valor del estado 'showMenu', cambiándolo entre 'true' y 'false'. Esto permite mostrar u ocultar el menú cuando se hace clic en él.
  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <GlobalStyle />
      <StyleContainer>
        {/* El componente 'Navbar' se renderiza si 'showMenu' es 'true', lo que significa que el menú está visible. */}
        {showMenu && (
          //  El componente 'Navbar' recibe la función 'handleMenuDisplay' como una 'prop' para permitir que se cierre el menú al hacer clic en un elemento del menú
          <Navbar id="close-menu" handleMenuDisplay={handleMenuDisplay} />
        )}
        <StyleNavContainer>
          <StyleLogo>
            <img src={Logo} alt="logo" />
          </StyleLogo>
          <StyleNavLine></StyleNavLine>
          <StyleNavLinksContainer>
            <StyleNavLinkItem to="/" id="home">
              <span>00</span>
              <StyleNavlink>Home</StyleNavlink>
            </StyleNavLinkItem>

            <StyleNavLinkItem to="destination" id="destination">
              <span>01</span>
              <StyleNavlink>Destination</StyleNavlink>
            </StyleNavLinkItem>

            <StyleNavLinkItem to="/crew" id="crew">
              <span>02</span>
              <StyleNavlink>Crew</StyleNavlink>
            </StyleNavLinkItem>

            <StyleNavLinkItem>
              <span>03</span>
              <StyleNavlink>Technology</StyleNavlink>
            </StyleNavLinkItem>

            <StyleHamburguer id="hamburger" onClick={handleMenuDisplay}>
              <img src={Hamburguer} alt="menu" />
            </StyleHamburguer>
          </StyleNavLinksContainer>
        </StyleNavContainer>

        {/* El componente 'Outlet' se renderiza, lo que permite que el contenido de las rutas se muestre en el lugar correcto dentro del Layout. */}
        <Outlet />
      </StyleContainer>
    </>
  );
};

export default Layout;
