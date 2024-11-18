import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const token = localStorage.getItem('jwtToken');

  // Fetch cart from localStorage if it exists
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setOrderData(savedCart);
    }
    setLoading(false);
  }, []);

  // Calculate total price whenever orderData changes
  useEffect(() => {
    const newTotalPrice = orderData.reduce((total, item) => {
      const quantity = Number(item.quantity) || 0;
      const price = Number(item.price) || 0;
      return total + quantity * price;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [orderData]);

  const update = async () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      navigate("/login");
    }
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/addorder',
        { order_dishes: orderData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Cart successfully submitted:", response.data);
      navigate("/order");
    } catch (error) {
      console.error("Error submitting cart:", error);
    }
  };

  // Handle quantity change for a specific dish in the cart
  const handleQuantityChange = (index, action) => {
    const newOrderData = [...orderData];
    const item = newOrderData[index];

    if (action === 'increase') {
      item.quantity = Math.max(1, item.quantity + 1);
    } else if (action === 'decrease' && item.quantity >= 1) {
      item.quantity -= 1;
    }

    setOrderData(newOrderData);
    localStorage.setItem('cart', JSON.stringify(newOrderData)); // Save updated cart to localStorage
    update(); // Update the orderData state
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sgst = (totalPrice * 0.08).toFixed(2);
  const cgst = (totalPrice * 0.08).toFixed(2);
  const deliveryCharge = 100;
  const finalCost = (totalPrice * 1.16 + deliveryCharge).toFixed(2);

  const vegSymbol = (
    <img
      src="/veg.png"
      alt="Veg Symbol"
      className="w-4 h-4 ml-2"
    />
  );
  const locationSymbol = (
    <img
      src="/location_icon.jpg"
      alt="Location Symbol"
      className="w-5 h-5 mr-2"
    />
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="text-center mb-8">
        <h2 className="text-5xl text-yellow-400 py-6 text-center">ORDER YOUR FAVOURITE FOODS</h2>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 space-y-4">
          {orderData
            .filter(item => item.quantity > 0)
            .map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold flex items-center">
                    {item.name} {vegSymbol}
                  </h3>
                  <div className="flex items-center mt-2">
                    <span className="mr-2">Quantity</span>
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-700"
                        onClick={() => handleQuantityChange(index, 'decrease')}
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-700"
                        onClick={() => handleQuantityChange(index, 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">Price of one: ₹{item.price}</p>
                  <p className="font-semibold">Net Price: ₹{item.quantity * item.price}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md mt-8 md:mt-0 md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Cost</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>SGST (8%)</span>
              <span>₹{sgst}</span>
            </div>
            <div className="flex justify-between">
              <span>CGST (8%)</span>
              <span>₹{cgst}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>
            <hr className="my-2 border-gray-700" />
            <div className="flex justify-between text-lg font-bold">
              <span>Final Cost</span>
              <span>₹{finalCost}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            {locationSymbol}
            <h4 className="font-semibold">Location</h4>
          </div>
          <p className="text-sm">123 Imaginary Lane, Dreamtown, Maharashtra, 400001, India.</p>

          <button className="mt-6 w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500">
            Pay Now
          </button>
        </div>
      </div>
      <div>
        <Link to="/menu"><h1 className='text-xl'><span>&larr;</span>
           Add More to Cart</h1></Link>
      </div>
    </div>
  );
};

export default Order;
