import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res)=>res.json())
    .then((data)=>{
      setPlants(data)
    })
  },[])

  function onPlantSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  function onSearch(input) {
    setSearchInput(input)
  }

  
  const filteredPlants = plants.filter((plant)=>{
      return plant.name.toLowerCase().includes(searchInput.toLowerCase())
    })
  

  function onDeletePlant(id) {
    const filteredPlants = plants.filter((plant)=>{
      return plant.id !== id
    })
    setPlants(filteredPlants)
  }

  return (
    <main>
      <NewPlantForm onPlantSubmit={onPlantSubmit}/>
      <Search searchInput={searchInput} onSearch={onSearch}/>
      <PlantList plants={filteredPlants} onDeletePlant={onDeletePlant}/>
    </main>
  );
}

export default PlantPage;