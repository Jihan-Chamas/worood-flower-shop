import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuth } from "firebase/auth";

function AddProduct({ ProductAdded }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [origin, setOrigin] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      image,
      description,
      price,
      origin,
      color,
      category,
      availability,
    };

    axios
      .post(
        `https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop.json`,
        newProduct
      )
      .then((response) => {
        ProductAdded(response.data);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-product">
      <h3>Add a New Product!</h3>
      {!isAuthenticated && (
        <p className="not-auth">You must be logged in to add a product.</p>
      )}{" "}
      {/* Display message if not authenticated */}
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

        {/* Conditionally render the Add Product button only if logged in */}
        {isAuthenticated && <button type="submit">Add</button>}
      </form>
    </div>
  );
}

export default AddProduct;
