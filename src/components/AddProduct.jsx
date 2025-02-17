import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

function AddProduct({ProductAdded}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [origin, setOrigin] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { 
      id: uuidv4(),
      name,
      image,
      description,
      price,
      origin,
      color,
      category,
      availability
    };

    axios.post(
      `https://us-central1-worood-flower-shop.cloudfunctions.net/api/addProduct`, 
      newProduct
    )
    .then((response) => {
      console.log("The product was added successfully:", response.data);
      navigate("/");
      ProductAdded(newProduct); 
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="add-product">
      <h3>Add a New Product!</h3>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input 
          type="text"
          name="name"
          value={name}
          placeholder="Add your product name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Describe your product"
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Image URL</label>
        <input
          type="url"
          name="image"
          value={image}
          placeholder="https://www.yourimage.com"
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Add your product price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Origin</label>
        <input
          type="text"
          name="origin"
          value={origin}
          placeholder="Enter product origin"
          onChange={(e) => setOrigin(e.target.value)}
        />

        <label>Color</label>
        <input
          type="text"
          name="color"
          value={color}
          placeholder="Enter product color"
          onChange={(e) => setColor(e.target.value)}
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={category}
          placeholder="Enter product category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Availability</label>
        <select
          name="availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
        >
          <option value="">Select Availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Limited Stock">Limited Stock</option>
        </select>

        <button type="submit">Add</button>
      </form> 
    </div>
  );
}

export default AddProduct;
