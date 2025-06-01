import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="view-btn">
        View
      </Link>
    </div>
  );
};

export default ProductCard;
