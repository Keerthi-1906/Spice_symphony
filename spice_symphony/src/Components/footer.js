import React from 'react'

function Footer() {
    return (
        <>
        <div className='p-12 px-52 flex justify-between'>
            <div>
                <div className='flex'>
                    <div className='py-3'>Logo</div>
                    <div className='px-4 text-4xl'>Spice symphony</div>
                </div>
                <p className='w-72 mt-5'>At Spice symphony, we pride ourselves on using only the freshest ingredients, carefully sourced from local markets and authentic spices straight from India. Our chefs have years of experience and are experts in blending traditional cooking methods with modern techniques, ensuring every dish offers a unique and unforgettable dining experience.</p>
            </div>

            <div className='px-6 mt-16 space-y-2 '>
                <h1 className='text-xl text-yellow-400'>Navigate</h1>
                <div className='flex space-x-9'>
                    <nav className='list-none space-y-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Menu</li>
                        <li className='text-yellow-500'>Gallery</li>
                    </nav>
                    <nav className='list-none space-y-2'>
                        <li>Reserve</li>
                        <li >Contact</li>
                        <li>Order Now</li>
                    </nav>
                </div>
            </div>
            <div className='px-6 mt-16 space-y-2'>
                <h1 className='text-xl text-yellow-400'>Contact Us</h1>
                <h2>+91 98998 99999</h2>
                <h2> www.spicesymphony.com</h2>
                <h2>spicesymphony@gmail.com</h2>
                <h2>123 Anywhere ST., Any City, ST 12345</h2>
            </div>
        </div>
        <div className="mt-6 text-xs flex justify-center">
          &copy; 2023 Spice Symphony. All Rights Reserved.
        </div>
        </>
    )
}

export default Footer