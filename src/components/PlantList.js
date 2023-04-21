import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant}) {

  return (
    <ul className="cards">{
      plants.map((plant) => {
        return (
          <PlantCard
            key={plant.name}
            plant={plant}
            onDeletePlant={onDeletePlant}
          />
        )
      })
    }</ul>
  );
}

export default PlantList;