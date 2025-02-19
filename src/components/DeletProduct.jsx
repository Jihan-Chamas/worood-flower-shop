import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop/${id}.json`)
            .then((response) => {
                if (response.data) {
                    setProduct(response.data);
                } else {
                    setError("Product not found");
                }
            })
            .catch((err) => {
                setError("Error fetching product");
                console.error(err);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop/${id}.json`)
            .then(() => {
                console.log("Product deleted successfully");
                navigate("/"); // Redirect to home or product list
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
                setError("Failed to delete product");
            });
    };

    if (error) return <div>{error}</div>;
    if (!product) return <div>Loading...</div>;

    return (
        <div className="delete-product">
            <h2>Delete Product</h2>
            <p>Are you sure you want to delete <strong>{product.name}</strong>?</p>
            <button onClick={handleDelete} className="delete-btn">Yes, Delete</button>
            <button onClick={() => navigate(`/product/${id}`)} className="cancel-btn">Cancel</button>
        </div>
    );
};

export default DeleteProduct;
