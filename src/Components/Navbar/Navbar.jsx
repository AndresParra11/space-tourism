import React from "react";
import Logo from '../../assets/icon/logo.svg'
import { StyleButton, StyleHeader, StyleHome, StyleLogo, StyleNav } from "./StyleNavbar";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      number: "00",
    },
    {
      name: "Destination",
      number: "01",
    },
    {
      name: "Crew",
      number: "02",
    },
    {
      name: "Technology",
      number: "03",
    }
  ];

  return (
  <>
  <StyleHome href="#">Skip to content</StyleHome>
    <StyleHeader>
      <StyleLogo>
        <img src={ Logo } alt="logo" />
      </StyleLogo>
      <StyleButton className="mobile-nav-toggle" aria-controls="primary-navigation"><span aria-expanded="false">Menu</span></StyleButton>
      <StyleNav>
        <ul id="primary-navigation" data-visible="false">
          {links.map((item, index) => (
            <li key={`${item.name}-${index}`}><a href="#"><span>{item.number}</span>{item.name}</a></li>
          ))}
        </ul>
      </StyleNav>
    </StyleHeader>
  </>
  );
};

export default Navbar;
