import React, { useState } from 'react'
import { menu } from '../json/menu_data'
import Card from './card';
function Menu() {
  const [selected , setSelected] = useState(menu[0].type);
  const getdishes = () => {
    const category = menu.find((m)=> m.type === selected);
    return category.dishes
  }
  return (
    <div className='p-12'>
        <h1 className='flex text-4xl text-yellow-300 justify-center'>Menu</h1>
        <div className='flex justify-center'>
        {menu.map((m)=>{
            return <button 
            key={m.type}
            onClick={()=>{setSelected(m.type)}}
            className='rounded-full m-5 px-4 p-2 border-yellow-400 border-2 flex-wrap' 
            style={{backgroundColor: m.type===selected?"#f8cf40":"transparent", 
                color: m.type===selected?"black":"white" }}>{m.type}</button>
        })}
        </div>
        <div className='flex justify-center'>
        <div className='grid  gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {getdishes().map((dish)=>{
            return <Card title={dish.name} disc={dish.description} price={dish.price} img={dish.image} veg={dish.vegetarian} spicy={dish.spicy}/>
        })}
        </div>
        </div>
    </div>
  )
}

export default Menu