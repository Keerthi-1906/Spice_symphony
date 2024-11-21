// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div 
            className="bg-cover bg-center h-screen" 
            style={{ backgroundImage: "url('/home_bg_pic.jpg')" }} // Replace with your image path
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-serif mb-4">Spice Symphony</h1>
                    <p className="mb-6">Highlights the rich and diverse use of spices in Indian cuisine.</p>
                    <div className="flex justify-center space-x-4">
                        <Link to='/menu' className="bg-yellow-500 text-black py-2 px-4 rounded-md font-semibold shadow-lg hover:bg-yellow-400 transition duration-300">
                            Order Now
                        </Link>
                        <Link to='/reserve' className="bg-white text-black py-2 px-4 rounded-md font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
                            Reservation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
