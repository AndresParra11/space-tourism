import React, { useEffect } from "react";
import {
  ContainerImagenHome,
  ContainerInfoHome,
  DetailsHome,
  FigureHome,
  ImgHome,
  StyleHome,
  SubTitleHome,
  TitleHome,
  ExploreText,
} from "./StyleHome";
import imagenHomeDesktop from "../../assets/img/home/Oval Copy.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/destination");
  };

    useEffect(() => {
    let linkItem = document.querySelector("#home");
    linkItem.classList.add("active");

    return () => {
      linkItem.classList.remove("active");
    };
  }, []);


  return (
    <>
      <StyleHome>
        <ContainerInfoHome>
          <SubTitleHome>SO, YOU WANT TO TRAVEL TO</SubTitleHome>
          <TitleHome>SPACE</TitleHome>
          <DetailsHome>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </DetailsHome>
        </ContainerInfoHome>
        <ContainerImagenHome onClick={handleContinue}>
          <FigureHome onClick={handleContinue}>
            <ImgHome
              src={imagenHomeDesktop}
              alt="Imagen Home"
              onClick={handleContinue}
            />
          </FigureHome>
          <ExploreText onClick={handleContinue}>EXPLORE</ExploreText>
        </ContainerImagenHome>
      </StyleHome>
    </>
  );
};

export default Home;
