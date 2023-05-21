import React from "react";
import { StyleDestinationLine, StyleDestinationRightOne, StyleDestinationRightTre, StyleDestinationRightTwo } from "./StyleDestination";

//El componente recibe 'planetData' como una 'prop', que contiene la información del destino seleccionado.
const DestinationContent = ({ planetData }) => {

  return (
    <>
      <StyleDestinationRightOne>
        {/* nombre del destino seleccionado utilizando 'planetData.name'. */}
        <h1>{planetData.name}</h1>
      </StyleDestinationRightOne>

      <StyleDestinationRightTwo>
        {/* nombre del destino seleccionado utilizando 'planetData.description'. */}
        <p>{planetData.description}</p>
      </StyleDestinationRightTwo>
      <StyleDestinationLine></StyleDestinationLine>
      <StyleDestinationRightTre>
        <div>
          <span>Avg. Distance</span>
        {/* nombre del destino seleccionado utilizando 'planetData.distance'. */}
          <p>{planetData.distance}</p>
        </div>

        <div>
          <span>Est. travel time</span>
        {/* nombre del destino seleccionado utilizando 'planetData.travel'. */}
          <p> {planetData.travel}</p>
        </div>
      </StyleDestinationRightTre>
    </>
  );
};

export default DestinationContent;
