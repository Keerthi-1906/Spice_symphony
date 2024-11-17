import React from 'react'
import { reviews } from '../json/reviews_info' 
import ReviewCard from './review_card'
function Reviews() {
  console.log(reviews);
  return (
    <>
    <h1 className='text-4xl text-yellow-300 flex justify-center'>What People Say?</h1>
    <div className='grid grid-cols-1 p-6 gap-3 gap-x-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{
      reviews.map((r)=>{
       return <ReviewCard name={r.name} content={r.content} ratings={r.rating}/>
      })
    }</div>
    </>
  )
}

export default Reviews