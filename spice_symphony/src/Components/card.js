import React from 'react'

function Card({
    img,
    title,
    price,
    disc,
    spicy = false,
    veg = true,

}) {
  return (
    <div>
        <img src={img} alt="food image"></img>
        <div>
            <h1>{title}</h1>
            <p>{disc}</p>
            <h1>Price: {price}</h1>
        </div>
    </div>
  )
}

export default Card