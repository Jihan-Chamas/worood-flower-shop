import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // This will give you the product id from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
console.log(id)
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
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Availability:</strong> {product.availability}
      </p>
      <p>
        <strong>origin:</strong> {product.origin}
      </p>
      <p>
        <strong>color:</strong> {product.color}
      </p>
      <p>
        <strong>category:</strong> {product.category}
      </p>

      <button className="shop-btn">Buy now</button>
    </div>
  );
};

export default ProductDetails;
