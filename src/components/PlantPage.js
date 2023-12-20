import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])
const [searchVal, setSearchVal]  = useState("")


useEffect(() => 
{
  fetch("http://localhost:6001/plants")
  .then(resp => resp.json())
  .then(data => setPlants(data))
}, [])

const plantsFiltered = plants.filter(plant => 
  {
    return plant.name.toLowerCase().includes(searchVal.toLowerCase())
  })

function handleAddPlant(newPlant)
{
  setPlants([...plants, newPlant])
}

function handleSearch(e)
{
  setSearchVal(e.target.value)
  // const plantsFiltered = plants.filter(plant => 
  //   {
  //     return plant.name.includes(searchVal)
  //   })
}

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plantsArr={plantsFiltered}/>
    </main>
  );
}

export default PlantPage;
