import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsArr }) {

  const plantsArrCopy = plantsArr.map(plant => 
    {
      return <PlantCard plant={plant} key={plant.id}/>
    })

  return (
    <ul className="cards">
      {plantsArrCopy}
    </ul>
  );
}

export default PlantList;
