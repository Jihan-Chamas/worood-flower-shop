import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const [origin, setOrigin] = useState("");
    const [category, setCategory] = useState("");
    const [availability, setAvailability] = useState("");
    const [price, setPrice] = useState("");
     
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop/${id}.json`)
            .then((response) => {
                if (response.data) {
                    const newProduct = response.data;
                    setName(newProduct.name );
                    setPrice(newProduct.price);
                    setImage(newProduct.image);
                    setDescription(newProduct.description);
                    setOrigin(newProduct.origin);
                    setColor(newProduct.color);
                    setCategory(newProduct.category);
                    setAvailability(newProduct.availability);
                }
            })
            .catch((e) => { console.log("Oops! There was an error:", e) });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const updatedProduct = { name, image, description, availability, price, category, origin, color };

        axios.put(`https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop/${id}.json`, updatedProduct)
        .then(() => {
            navigate("/");
        })
        .catch((error) => console.log("Update failed:", error));
    };

    return (
        <div className="add-product">
            <h3>Update Product</h3>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label>Image URL</label>
                <input type="url" value={image} onChange={(e) => setImage(e.target.value)} />

                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

                <label>Origin</label>
                <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />

                <label>Color</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />

                <label>Category</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

                <label>Availability</label>
                <select value={availability} onChange={(e) => setAvailability(e.target.value)} required>
                    <option value="">Select Availability</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Limited Stock">Limited Stock</option>
                </select>

                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateProduct;
