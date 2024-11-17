import React from "react";

const PopularDishes = () => {
  const dishes = [
    {
      title: "Grilled sandwich with fries",
      description:
        "Food combines crispy grilled bread with a savory filling, paired with golden fries and a side of tangy ketchup for dipping.",
      image: "popular_dishes_grilled_sandwich.jpg", // Replace with the actual image path
    },
    {
      title: "Paneer Butter Masala",
      description:
        "Cooked in a rich and creamy tomato-based gravy, flavored with butter, spices, and garnished with cilantro. It is often served with naan or rice.",
      image: "popular_dishes_paneer.jpg", // Replace with the actual image path
    },
    {
      title: "Idli and Chutney",
      description:
        "Idli is a healthy breakfast that is served with delicious coconut chutney and sambar. Idli is soft and fluffy.",
      image: "popular_dishes_idli.jpg", // Replace with the actual image path
    },
    {
      title: "Noodles",
      description:
        "Noodles are a versatile and popular dish, enjoyed in various forms across different cultures for their quick cooking and delicious taste.",
      image: "popular_dishes_noodles.jpg", // Replace with the actual image path
    },
  ];

  return (
    <div className="bg-black text-white py-20 min-h-screen flex flex-col items-center justify-center">
      {/* Main Heading with Yellow and Brown Gradient Text */}
      <h2
        className="text-center text-4xl font-serif mb-12"
        style={{
          background: "linear-gradient(45deg, rgb(255, 204, 0), rgb(139, 69, 19))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        OUR POPULAR DISHES
      </h2>
      
      {/* Grid Layout for the Dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-10">
        {dishes.map((dish, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            {/* Dish Name Above Content */}
            <h3 className="text-lg font-bold text-yellow-400 mb-2">{dish.title}</h3>
            
            {/* Content (Description) Below Dish Name */}
            <div className="text-white mb-4">
              <p className="text-sm mt-2 px-2">{dish.description}</p>
            </div>

            {/* Image with Oval Shape and Golden Border */}
            <img
              src={dish.image}
              alt={dish.title}
              className="rounded-full mx-auto w-60 h-60 object-cover border-4 border-yellow-600 mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
