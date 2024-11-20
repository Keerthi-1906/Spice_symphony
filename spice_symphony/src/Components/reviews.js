import React from 'react'
import { reviews } from '../json/reviews_info' 
import ReviewCard from './review_card'
function Reviews() {
  console.log(reviews);
  return (
    <div className='mt-20'>
    <h1 className='text-5xl flex justify-center font-serif mb-12'
        style={{
          background: "linear-gradient(45deg, rgb(255, 204, 0), rgb(139, 69, 19))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>What People Say?</h1>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{
      reviews.map((r)=>{
       return <ReviewCard name={r.name} content={r.content} ratings={r.rating}/>
      })
    }</div>
    </div>
  )
}

export default Reviews