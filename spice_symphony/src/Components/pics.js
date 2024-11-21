import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white">
   

      {/* Gallery Section */}
      <section className="p-8">
        <h2 className="text-5xl text-yellow-400 py-6 text-center ">GALLERY</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src="/home_bg_pic.jpg" // Replace with actual image URLs
              alt="Interior of the restaurant"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative " >
            <img
              src="/quote.jpg" // Replace with actual image URLs
              alt="Neon sign"
              className="w-full  object-cover rounded-lg shadow-lg"
            />
            {/* <p className="absolute bottom-2 right-2 bg-black bg-opacity-50 px-2 py-1 text-sm rounded text-pink-400">SO GLAD YOU'RE HERE</p> */}
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
          <div className="relative">
          <img
              src="/relax_rest_pic.jpg"// Replace with actual image URLs
              alt="Dessert dish"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
          <img
              src="/spicycaulifolwer_kulcha.jpg"// Replace with actual image URLs
              alt="Dessert dish"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
          <img
              src="/people_in_restaurant.jpg"// Replace with actual image URLs
              alt="Dessert dish"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
          <img
              src="/Steaming_Vegetable_Soup.jpg"// Replace with actual image URLs
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
