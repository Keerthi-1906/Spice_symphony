import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Home from '../Components/home'
function HomePage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Home/>
            <Footer />
        </div>
    )
}

export default HomePage