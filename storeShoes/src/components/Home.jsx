import { useState } from "react";
import { useNavigate } from "react-router-dom";

const shoes = [
  {
    id: 1,
    name: "Shoe 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUgIH3I5SjSV98DGb-ZBu4Rhie1owqfY-9Q&s",
    price: 50,
  },
  {
    id: 2,
    name: "Shoe 2",
    image:
      "https://ae01.alicdn.com/kf/Se3b1758fa9db412fbc74585c98951661F.jpg_640x640Q90.jpg_.webp",
    price: 60,
  },
  {
    id: 3,
    name: "Shoe 3",
    image:
      "https://image.made-in-china.com/202f0j00gCVaAifFnObR/Funny-Kids-Rain-Shoes.jpg",
    price: 70,
  },
  {
    id: 4,
    name: "Shoe 4",
    image:
      "https://d1gpzof0viq1mp.cloudfront.net/products/0409202420371066157cc6c0ffa.jpg",
    price: 80,
  },
  {
    id: 5,
    name: "Shoe 5",
    image:
      "https://cosaybadi.wordpress.com/wp-content/uploads/2011/12/old_shoe.jpg",
    price: 90,
  },
  {
    id: 6,
    name: "Shoe 6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjgcghDkQezbXAvccsibsr-YVSRWCMNeRw&s",
    price: 100,
  },
  {
    id: 7,
    name: "Shoe 7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnP42avA3zFzauLASb8OhEE5V2p3Sgwv-gw&s",
    price: 110,
  },
  {
    id: 8,
    name: "Shoe 8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklwHyiRC6GwuI__QLFZFmuUrdNcGbpRnCNA&s",
    price: 120,
  },
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  const goToCart = () => {
    navigate("/cart", { state: { cart } });
  };

  return (
    <div>
      <div className="shoe-list">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="shoe-item">
            <img src={shoe.image} alt={shoe.name} />
            <h2>{shoe.name}</h2>
            <p>${shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button className="cart-button" onClick={goToCart}>
        Go to Cart ({cart.length})
      </button>
    </div>
  );
};

export default Home;
