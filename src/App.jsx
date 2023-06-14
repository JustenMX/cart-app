import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // state
  const [cartItems, setCartItems] = useState([]);

  // useEffect to fetch cart items from localStorage
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Add items to Cart and push to localStorage
  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    // push to localStorage and convert array to JSON string
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Remove items from cart and clear localStorage
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div>
      <h1>Cart App</h1>
      <button onClick={() => addToCart("Item 1")}>Click to add - Item 1</button>
      <button onClick={() => addToCart("Item 2")}>Click to add - Item 2</button>
      <button onClick={() => addToCart("Item 3")}>Click to add - Item 3</button>
      <button onClick={clearCart}>Clear Cart</button>
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
