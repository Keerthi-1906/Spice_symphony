import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center p-6 border-b border-gray-600">
        <h1 className="text-2xl font-bold">Spice Symphony</h1>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
          <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
          <li className="hover:text-yellow-400 cursor-pointer">Reserve</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          <li className="hover:text-yellow-400 cursor-pointer">Order Now</li>
        </ul>
      </nav> */}

      {/* Gallery Section */}
      <section className="p-8">
        <h2 className="text-5xl text-yellow-400 py-6 text-center">GALLERY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src="/home_bg_pic.jpg" // Replace with actual image URLs
              alt="Interior of the restaurant"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="/quote.jpg" // Replace with actual image URLs
              alt="Neon sign"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <p className="absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 text-sm rounded text-pink-400">SO GLAD YOU'RE HERE</p>
          </div>
          <div className="relative">
            <img
              src="/foodstarter.jpg" // Replace with actual image URLs
              alt="Grilled dish"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="/brownie_sundae.jpg"// Replace with actual image URLs
              alt="Dessert dish"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
