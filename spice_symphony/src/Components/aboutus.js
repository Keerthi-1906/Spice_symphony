import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl font-serif text-yellow-500 mb-6">ABOUT US</h1>
          <p className="text-lg leading-relaxed">
            At Spice Symphony, we pride ourselves on using only the freshest
            ingredients, carefully sourced from local markets and authentic
            spices straight from India. Our chefs have years of experience and
            are experts in blending traditional cooking methods with modern
            techniques, ensuring every dish offers a unique and unforgettable
            dining experience.
          </p>
          <button className="mt-8 px-6 py-2 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-600 transition">
            View More -&gt;
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="aboutus.jpg"
            alt="About Us"
            className="rounded-lg" // Border removed
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
