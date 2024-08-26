// import useCartStore from "../zustand/store"
// import '../css/Cart.css' 

// const CartPage = () => {

//     const cartItems = useCartStore((state) => state.items);
//     const clearCart = useCartStore((state)=> state.clearCart);

// const handleClearCart = ()=>{
//     clearCart();
// }

//   return (


//   <div className="cart-container">
//     <h1>CartItems - ({cartItems.length})</h1>
//     <button onClick={handleClearCart} >Clear Cart</button>
//     {
//         cartItems?.map((item, index) => (
//             <div key={index} >
//                 <img src={item.image} alt={item.title} />
//                 <h3> {item.title} </h3>
//                 <p> {item.price} </p>
//                 <p> {item.description}</p>
//             </div>
//         ))
//     }
//   </div>
//   )
// }

// export default CartPage


import React from "react";
import useCartStore from "../zustand/store";
import '../css/Cart.css';

const CartPage = () => {
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="cart-container">
      <h1>Cart Items - ({cartItems.length})</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
