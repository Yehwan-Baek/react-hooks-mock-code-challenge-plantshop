import React, {useState} from "react";

function PlantCard({plant, onDeletePlant}) {
  const [isCilcked, setIsClicked] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function onToggle () {
    setIsClicked(!isCilcked)
  }

  function handlePlantDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "DELETE",
    })
    .then((res)=>res.json())
    .then((data) => {
      onDeletePlant(plant.id)
    })
  }

  function handleNewPrice() {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({price: parseFloat(price)})
    })
  }



  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>

      <form onSubmit={handleNewPrice}>
        <input 
          onChange={(e)=>setPrice(e.target.value)}
          type="text"
          value={price}
        />
      </form>

      {true ? (
        <button 
          onClick={onToggle}
          className="primary"
        >In Stock</button>
      ) : (
        <button
          onClick={onToggle}
        >Out of Stock</button>
      )}

      <button onDeletePlant={handlePlantDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;