import React, { useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom";
import planets from "../../data/data.json";
import DestinationContent from "../../Components/Destination/Destination";

import { StyleBackground, StyleDestinationLeft, StyleDestinationLeftOne, StyleDestinationLeftTwo, StyleDestinationPage, StyleDestinationRight, StyleDestinationRightNav, StyleDestinationRightNavPlanets } from "./StyleDestination";

const Destination = () => {
  //Definimos un estado inicial utilizando el hook 'useState'. El estado 'destinationData'
  //es un objeto que contiene la información del destino seleccionado, inicializado con los valores del primer destino en la lista planets.destinations del archivo data.json.
  const [destinationData, setDestinationData] = useState({
    image: planets.destinations[0].png,
    name: planets.destinations[0].name,
    description: planets.destinations[0].description,
    distance: planets.destinations[0].distance,
    travel: planets.destinations[0].travel,
  });


  //El hook 'useEffect' lo utilizamos para realizar algunas operaciones cuando el componente se monta y desmonta. En este caso, se agrega y se elimina la clase "active" de algunos elementos del DOM. El efecto se ejecuta cuando cambia el estado 'destinationData'
    useEffect(() => {
    // agregamos la clase activa a medida que se carga la página
    let linkItem = document.querySelector("#destination");
    linkItem.classList.add("active");

    let navItem = document.querySelector(
      `#${destinationData.name.toLowerCase()}`
    );
    navItem.classList.add("active");

    return () => {
      // eliminamos la clase activa a medida que la página se desmonta
      linkItem.classList.remove("active");
      navItem.classList.remove("active");
    };
  }, [destinationData]);


  //La función 'handleDestinationData' se utiliza para actualizar el estado 'destinationData' con los datos del destino seleccionado. Recibe un objeto 'item' como argumento y actualiza el estado con sus propiedades correspondientes.
  const handleDestinationData = (item) => {
    setDestinationData({
      image: item.png,
      name: item.name,
      description: item.description,
      distance: item.distance,
      travel: item.travel,
    });
  };

  console.log(destinationData.image);
  return (
    <StyleBackground>
      <StyleDestinationPage>
        <StyleDestinationLeft>
          <StyleDestinationLeftOne>
            <span>01</span>
            <p>Pick your destination</p>
          </StyleDestinationLeftOne>
          <StyleDestinationLeftTwo>
            <img src={destinationData.image} alt={destinationData.name} />            
          </StyleDestinationLeftTwo>
        </StyleDestinationLeft>

        <StyleDestinationRight>
          <StyleDestinationRightNav>
          {planets.destinations.map((item) => {
              return (
                <StyleDestinationRightNavPlanets
                  key={item.id}
                  id={item.name.toLowerCase()}
                  onClick={() => handleDestinationData(item)}>
                  {item.name}
                </StyleDestinationRightNavPlanets>
              );
            })}
          </StyleDestinationRightNav>

            {/* Datos del destino Actual */}
          <DestinationContent planetData={destinationData} />
          
        </StyleDestinationRight>
      </StyleDestinationPage>
    </StyleBackground>
  );
};

export default Destination;


// , { useEffect, useState }