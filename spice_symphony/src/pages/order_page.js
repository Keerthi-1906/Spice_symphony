import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
// import Menu from '../Components/menu'
import Order from '../Components/order'
function OrderPage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Order />
            <Footer />
        </div>
    )
}

export default OrderPage