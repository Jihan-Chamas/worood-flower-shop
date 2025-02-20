import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"; // Import Firebase Auth hook
import { getAuth } from "firebase/auth";
import "./styling.css";

const ProductDetails = () => {
  const { id } = useParams(); // This will give you the product id from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth(); // Initialize Firebase Auth
  const [currentUser] = useAuthState(auth); // Check if a user is logged in

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop/${id}.json`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Error fetching product");
        console.error("Error fetching product:", err);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Availability:</strong> {product.availability}
        </p>
        <p>
          <strong>Origin:</strong> {product.origin}
        </p>
        <p>
          <strong>Color:</strong> {product.color}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <div className="delete-update-btns">
          {currentUser ? (
            <>
              <Link to={`/updateproduct/${id}`}>
                <button className="shop-btn">Update</button>
              </Link>
              <Link to={`/deleteproduct/${id}`}>
                <button className="shop-btn">Delete</button>
              </Link>
            </>
          ) : (
            <p className="not-auth">
              Please log in to update or delete this product.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
