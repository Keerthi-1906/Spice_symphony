import React from 'react';
import { TbCurrencyRupee } from "react-icons/tb";

function Card({
  img,
  title,
  price,
  disc,
  spicy = false,
  veg = true,
  onAddToCart,
  increaseQuantity,
  decreaseQuantity,
  quantity
}) {
  console.log(`card rerender ${title}`);

  return (
    <div className='bg-white rounded-md w-80 text-black'>
      <img src={img} alt="food" className='w-80 rounded-md' />

      <div className='p-4'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-sm pt-3 h-16'>{disc}</p>
      </div>

      <div className='flex justify-between pb-5 pl-3'>
        <div className='flex'>
          {veg ? (
            <img src="/veg.png" alt="veg symbol" className='w-8 h-8' />
          ) : (
            <img src="/non-veg.jpg" alt="non-veg symbol" className='w-8 h-8' />
          )}

          {spicy && (
            <img src="/spicy.jpg" alt="spicy" className='w-8 h-8' />
          )}
        </div>

        <div className='flex'>
          <span className='text-2xl align-middle my-1'>
            <TbCurrencyRupee />
          </span>
          <h1 className='text-2xl pr-6'>{price}</h1>
        </div>
      </div>

      {/* Quantity Control */}
      {quantity === 0 ? (
        <button
          className="bg-yellow-400 py-2 my-4 mx-3 rounded-md px-4"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart({ name: title, price, description: disc, image: img, spicy, vegetarian: veg })
          }}
        >
          Add
        </button>
      ) : (
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation() ; decreaseQuantity() }}
              className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation() ; increaseQuantity() }}
              className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
