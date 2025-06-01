import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="/products" className="back-btn">
          Browse Products
        </a>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>
              Quantity:
              <button onClick={() => decreaseQty(item.id)} className="qty-btn">
                -
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)} className="qty-btn">
                +
              </button>
            </p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
