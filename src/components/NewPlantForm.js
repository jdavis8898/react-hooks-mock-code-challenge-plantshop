import React, {useState} from "react";

function NewPlantForm({ onAddPlant }) {

  const initialObject = 
  {
    "name": "",
    "image": "",
    "price": 0
  }

  const [formData, setFormData] = useState(initialObject)

  function handleChange(e)
  {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      })
  }

  function handleSubmit(e)
  {
    e.preventDefault()

    fetch("http://localhost:6001/plants", 
    {
      method: "POST",
      headers: 
      {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => onAddPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
