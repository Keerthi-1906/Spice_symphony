import React from 'react';
import { order as orderData } from '../json/order_data';

const Order = () => {
  const totalPrice = orderData.reduce((total, item) => total + item.quantity * item.price, 0);
  const sgst = (totalPrice * 0.08).toFixed(2);
  const cgst = (totalPrice * 0.08).toFixed(2);
  const deliveryCharge = 100;
  const finalCost = (totalPrice * 1.16 + deliveryCharge).toFixed(2);

 // Replace the vegSymbol variable with this image element
const vegSymbol = (
    <img
      src="/veg.png" // Ensure the image is in the public directory or provide a valid path
      alt="Veg Symbol"
      className="w-4 h-4 ml-2"
    />
  );
  const locationSymbol = (
    <img
      src="/location_icon.jpg" // Replace with the correct path to your image
      alt="Location Symbol"
      className="w-5 h-5 mr-2"
    />
  );
  
  

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl text-yellow-400 py-6 text-center">ORDER YOUR FAVOURITE FOODS</h2>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column: Food Items */}
        <div className="flex-1 space-y-4">
          {orderData.map((item, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold flex items-center">
                  {item.name} {vegSymbol}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Quantity</span>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-700">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button className="px-2 py-1 border border-gray-600 rounded hover:bg-gray-700">+</button>
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

        {/* Right Column: Cost Summary */}
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
            {locationSymbol} {/* Use the variable here */}
            <h4 className="font-semibold">Location</h4>
          </div>
          <p className="text-sm">123 Imaginary Lane, Dreamtown, Maharashtra, 400001, India.</p>


          <button className="mt-6 w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
