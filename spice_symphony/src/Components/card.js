import React from 'react'
import { TbCurrencyRupee } from "react-icons/tb";
function Card({
  img,
  title,
  price,
  disc,
  spicy = false,
  veg = true,

}) {
  return (
    <div className='bg-white rounded-md w-80 text-black'>
      <img src={img} alt="food" className='w-80 rounded-md'></img>
      <div className=' p-4'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-sm pt-3 h-16'>{disc}</p>
      </div>
      <div className='flex justify-between pb-5 pl-3 '>
        <div className='flex'>
          {veg ? <img src="/veg.png" alt="veg symbol" className='w-8 h-8'></img> :
            <img src="/non-veg.jpg" alt="non-veg-symbol" className='w-8 h-8'></img>}
          {spicy ? <img src="/spicy.jpg" alt="spicy" className='w-8 h-8'></img> : <span></span>}
        </div>
        <div className='flex '>
          <span className='text-2xl align-middle my-1 '><TbCurrencyRupee /></span><h1 className='text-2xl'>{price}</h1>
          <button className='bg-yellow-400 mx-3 rounded-md px-4'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Card