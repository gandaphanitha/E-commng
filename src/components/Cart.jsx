


import React from "react";
import "../css/Cart.css";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating.rate} / 5</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
              <img src={item.image} alt={item.title} />
            </div>
          ))
        ) : (
          <h1>No items in the cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
