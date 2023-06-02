import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { StyleBackground, StyleTechCircle, StyleTechContent, StyleTechContentLeft, StyleTechContentLeft1, StyleTechContentLeft2, StyleTechImg, StyleTechRight, TechContentTitle, TechDescription, TechTitle } from "./StyleTechnology";

const Technology = () => {
  const [techData, setTechData] = useState({
    name: data.technology[0].name,
    description: data.technology[0].description,
    image: data.technology[0].images.portrait,
    imageDesktop: data.technology[0].images.landscape,
    id: data.technology[0].id,
  });

  //funcion para manejar lso clicks, actualiza el estado 'techData' cuando se hace clic en un elemento.
  const handleClick = (item) => {
    //Luego, la función utiliza 'setTechData' para actualizar el estado techData con los valores del item seleccionado.
    setTechData({
      name: item.name,
      description: item.description,
      image: item.images.portrait,
      imageDesktop: item.images.landscape,
      id: item.id,
    });
  };

  //realizamos un efecto secundario después de que el componente se monte y cada vez que el estado 'techData' cambie
  useEffect(() => {
    //Seleccionamos un elemento del DOM con el id 'technology' y se le agrega la clase "active".
    let linkItem = document.querySelector("#technology");
    linkItem.classList.add("active");

    let circle = document.querySelector(`#circle-${techData.id}`);
    circle.classList.add("activate");

    return () => {
      linkItem.classList.remove("active");
      circle.classList.remove("activate");
    };
  }, [techData]);

  return (
    <StyleBackground>
      <TechTitle>
        <span>03</span>
        <p>Space Launch 101</p>
      </TechTitle>
      <StyleTechContent>
        <StyleTechContentLeft>
          <StyleTechImg src={techData.imageDesktop} alt={techData.name} />
          <StyleTechContentLeft1>
            {data.technology.map((item) => {
              return (
                <StyleTechCircle
                  key={item.id}
                  id={`circle-${item.id}`}
                  onClick={() => handleClick(item)}
                >
                  <span>{item.id}</span>
                </StyleTechCircle>
              );
            })}
          </StyleTechContentLeft1>

          <StyleTechContentLeft2>
            <TechContentTitle>The terminology...</TechContentTitle>
            <h1>{techData.name}</h1>
            <TechDescription>{techData.description}</TechDescription>
          </StyleTechContentLeft2>
        </StyleTechContentLeft>
        <StyleTechRight>
          <img src={techData.image} alt={techData.name} />
        </StyleTechRight>
      </StyleTechContent>
    </StyleBackground>
  );
};

export default Technology;
