import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Home from '../Components/home'
import Reviews from '../Components/reviews'
function HomePage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Home/>
            <Reviews/>
            <Footer />
        </div>
    )
}

export default HomePage