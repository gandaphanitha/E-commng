

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCT_API } from "../constant/apiConstant";
import "../css/ProductDetails.css";

const ProductDetails = ({ handleAddToCart }) => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`${PRODUCT_API}/${id}`); // Fetch product details
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  if (!product) return <div>Loading...</div>; // Show a loading message while fetching data
  
  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="details">
        <p><strong>Description:</strong> {product.description}</p>
      </div>
      <p className="price"><strong>Price:</strong> ${product.price}</p>
      <p className="rating"><strong>Rating:</strong> {product.rating.rate} / 5</p>
      <p><strong>Count:</strong> {product.rating.count} reviews</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button> {/* Add to Cart button */}
    </div>
  );
};

export default ProductDetails;
