import React, { useEffect, useState } from "react";
import team from "../../data/data.json";
import {
  Background,
  CrewRight,
  CrewRightOne,
  CrewPage,
  CrewLeft,
  CrewLeftNav,
  BulletPointContainer,
  BulletPoint
} from "./StyleCrew";

const Crew = () => {
  const [crewData, setCrewData] = useState({
    image: team.crew[0].png,
    name: team.crew[0].name,
    bio: team.crew[0].bio,
    role: team.crew[0].role,
    id: team.crew[0].id,
  });

  useEffect(() => {
    console.log(crewData);
  }, [crewData]);

  const handleCrewClick = (crew) => {
    setCrewData({
      image: crew.png,
      name: crew.name,
      bio: crew.bio,
      role: crew.role,
      id: crew.id,
    });
  };

  return (
    <Background>
      <CrewPage>
        <CrewLeft>
          <div className="meet">
            <p>02</p>
            <p>MEET YOUR CREW</p>
          </div>

          <div className="details">
            <h2>{crewData.role}</h2>
            <h1>{crewData.name}</h1>
            <p>{crewData.bio}</p>
          </div>
          
          <div className="bullets">
            <CrewLeftNav>
              <BulletPointContainer>
                {team.crew.map((crew) => (
                  <BulletPoint 
                  key={crew.id} 
                  onClick={() => handleCrewClick(crew)} 
                  selected={crew.id === crewData.id} // pasa la prop "selected" aquí
                />
                
                ))}
              </BulletPointContainer>
            </CrewLeftNav>
          </div>
        </CrewLeft>
        
        <CrewRight>
          <CrewRightOne>
            <img src={crewData.image} alt={crewData.name} />
          </CrewRightOne>
        </CrewRight>
      </CrewPage>
    </Background>
  );
};

export default Crew;
