import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Home from '../Components/home'
import Reviews from '../Components/reviews'
import PopularDishes from '../Components/popularDishes'
import AboutUs from '../Components/aboutus'
function HomePage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Home/>
            <AboutUs/>
            <PopularDishes/>
            <Reviews/>
            <Footer />
        </div>
    )
}

export default HomePage