import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Gallery from '../Components/pics'
function GalleryPage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Gallery />
            <Footer />
        </div>
    )
}

export default GalleryPage