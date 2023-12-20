import React, {useState} from "react";

function PlantCard({ plant }) {

  const [isOutOfStock, setIsOutOfStock] = useState(false)

  function handleClick()
  {
    setIsOutOfStock(!isOutOfStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {"$" + plant.price}</p>
      {isOutOfStock ? (
        <button onClick={handleClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleClick}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
