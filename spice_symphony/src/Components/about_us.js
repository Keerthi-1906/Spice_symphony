import React from "react";

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('about_us.jpg')", // Replace with your image path
      }}
    >
      {/* Navbar (optional, as shown in the design) */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-70">
        {/* Logo and Restaurant Name */}
        <div className="flex items-center space-x-3">
          <img
            src="logo192.png" // Replace with your logo image path
            alt="Spice Symphony Logo"
            className="w-12 h-12 object-contain" // Adjust size of the logo
          />
          <h1 className="text-lg font-bold text-yellow-500">Spice Symphony</h1>
        </div>

        <ul className="flex space-x-6 text-white">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer text-yellow-500">About Us</li> {/* "About Us" in yellow */}
          <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-500 cursor-pointer">Gallery</li>
          <li className="hover:text-yellow-500 cursor-pointer">Reserve</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          <li className="hover:text-yellow-500 cursor-pointer">Order Now</li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 lg:px-32 mt-24">
        {/* Main Heading */}
        <h1
          className="text-white" // Main heading in white
          style={{
            fontFamily: "Dream Avenue, sans-serif",
            fontSize: "55px", // Reduced font size
            fontWeight: "normal", // Normal weight
          }}
        >
          ABOUT US
        </h1>

        {/* Description */}
        <div className="mt-12 text-center">
          <p
            className="text-white italic"
            style={{
              fontFamily: "Magnolia Script, cursive",
              fontSize: "28px", // Reduced font size
              fontWeight: "normal", // Normal weight
            }}
          >
            Our restaurant's warm, inviting atmosphere is designed to make you
            feel right at home. Whether you're here for a family dinner, a
            romantic evening, or a celebration with friends, <strong>Spice Symphony</strong> is the
            perfect place to savor the best of Indian cuisine. We also offer
            takeout and catering services, bringing the flavors of India to your
            special events.
          </p>
          <p
            className="mt-6 text-white italic"
            style={{
              fontFamily: "Magnolia Script, cursive",
              fontSize: "28px", // Reduced font size
              fontWeight: "normal", // Normal weight
            }}
          >
            Come experience a true taste of India at <strong>Spice Symphony</strong>, where every meal is a
            celebration of culture, tradition, and delicious food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
