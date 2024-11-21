import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import AdminMenu from '../Components/admin_menu'
function AdminMenuPage() {
    return (
        <div className=' bg-black text-white'>
            <Header />
            <AdminMenu />
            <Footer />
        </div>
    )
}

export default AdminMenuPage