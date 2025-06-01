import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/product.css";
import { CartContext } from "../components/CartContext";

const PorductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading Product details...</p>;
  if (!product) return <p>Product Not Found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.tite} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>
          <strong>Price: </strong>${product.price}
        </p>
        <p>
          <strong>Category: </strong>
          {product.category}
        </p>
        <p>{product.description}</p>
        <p>
          <strong>Rating: </strong>
          {product.rating.rate} ⭐ ({product.rating.count} reviews)
        </p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PorductDetail;
