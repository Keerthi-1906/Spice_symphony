import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
function ReviewCard({
    name, content, ratings
}) {
    const rating = () => {
        let star = [];
        let remaining = 5- Math.ceil(ratings);
        for (let i = 0; i < Math.floor(ratings); i++) {
            star.push(<span><FaStar /></span>)
        }
        if(Math.floor(ratings)!==ratings && ratings<5){
            star.push(<span><FaStarHalfAlt/></span>)
        }
        for(let i=0;i<remaining;i++){
            star.push(<span><FaRegStar/></span>)
        }
        return star
    }

    return (
        <div className='w-96 p-4 text-white'>
            <div className='w-full h-full rounded-md bg-no-repeat flex flex-col flex-grow' style={{ backgroundImage: "url('/reviews.png')" }}>
                <div className='py-4 h-52'>
                    <h1 className='flex justify-center text-xl px-4 py-5'>{name}</h1>
                    <p className=' ml-16 self-end px-5'>{content}</p>
                    {/* <h2>{ratings}</h2> */}
                </div>
                <div className='flex text-yellow-300 justify-center pb-4'>{rating()}</div>

            </div>
        </div>
    )
}

export default ReviewCard