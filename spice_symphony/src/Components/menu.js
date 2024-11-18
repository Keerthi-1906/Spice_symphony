import React, { useState, useEffect, useCallback } from 'react';
import Card from './card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if it exists
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();

  const increaseQuantity = useCallback((dish) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.name === dish.name) {
          item.quantity += 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const decreaseQuantity = useCallback((dish) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.name === dish.name && item.quantity >= 1) {
          item.quantity -= 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleAddToCart = useCallback((dish) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingDish = updatedCart.find((item) => item.name === dish.name);
      if (existingDish) {
        existingDish.quantity += 1;
      } else {
        updatedCart.push({ ...dish, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/menu/get-menu");
      setData(response.data);
      if (response.data.length > 0) {
        setSelected(response.data[0].categories[0]?.type || "");
      }
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const showorder = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/addorder",
        { order_dishes: cart },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Cart successfully submitted:", response.data);
      navigate("/order");
    } catch (error) {
      console.error("Error submitting cart:", error);
    }
  };

  const getDishes = () => {
    for (let menu of data) {
      for (let category of menu.categories) {
        if (category.type === selected) {
          return category.dishes;
        }
      }
    }
    return [];
  };

  return (
    <div className="p-12">
      <h1 className="flex text-4xl text-yellow-300 justify-center">Menu</h1>
      <div className="flex justify-center">
        {data.map((menu) =>
          menu.categories.map((category) => (
            <button
              key={category._id}
              onClick={() => setSelected(category.type)}
              className="rounded-full m-5 px-4 p-2 border-yellow-400 border-2 flex-wrap"
              style={{
                backgroundColor: category.type === selected ? "#f8cf40" : "transparent",
                color: category.type === selected ? "black" : "white",
              }}
            >
              {category.type}
            </button>
          ))
        )}
      </div>

      <div className="flex justify-center">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {getDishes().map((dish) => (
            <Card
              key={dish._id}
              title={dish.name}
              disc={dish.description}
              price={dish.price}
              img={dish.image}
              veg={dish.vegetarian}
              spicy={dish.spicy}
              onAddToCart={handleAddToCart}
              increaseQuantity={() => increaseQuantity(dish)}
              decreaseQuantity={() => decreaseQuantity(dish)}
              quantity={cart.find((item) => item.name === dish.name)?.quantity || 0}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <button onClick={showorder} className="bg-yellow-500 text-black py-2 px-6 rounded-md hover:bg-yellow-500">
          Cart
        </button>
      </div>
    </div>
  );
}

export default Menu;
