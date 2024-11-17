import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
// import Menu from '../Components/menu'
import Reservation from '../Components/ReservationForm'
function ReservationPage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <Reservation />
            <Footer />
        </div>
    )
}

export default ReservationPage