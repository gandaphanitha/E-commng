import useCartStore from "../zustand/store"
import '../css/Cart.css' 

const CartPage = () => {

    const cartItems = useCartStore((state) => state.items);
    const clearCart = useCartStore((state)=> state.clearCart);

const handleClearCart = ()=>{
    clearCart();
}

  return (


  <div className="cart-container">
    <h1>CartItems - ({cartItems.length})</h1>
    <button onClick={handleClearCart} >Clear Cart</button>
    {
        cartItems?.map((item, index) => (
            <div key={index} >
                <img src={item.image} alt={item.title} />
                <h3> {item.title} </h3>
                <p> {item.price} </p>
                <p> {item.description}</p>
            </div>
        ))
    }
  </div>
  )
}

export default CartPage