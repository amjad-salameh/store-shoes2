import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Cart;
