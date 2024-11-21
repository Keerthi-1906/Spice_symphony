import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram ,FaLinkedin ,FaSquareXTwitter} from "react-icons/fa6";
function Footer() {
    return (
        <>
            <div className='p-12  px-52 flex justify-between'>
                <div>
                    <div className='flex'>
                        {/* <div className='py-3'>Logo</div> */}
                        <div className='px-4 text-4xl  font-serif mb-6'
                            style={{
                                background: "linear-gradient(45deg, rgb(255, 204, 0), rgb(139, 69, 19))",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}>Spice symphony</div>
                    </div>
                    {/* <p className='w-72 mt-5'>
                        At Spice symphony, we pride ourselves on using only the freshest ingredients, carefully sourced from local markets and authentic spices straight from India. Our chefs have years of experience and are experts in blending traditional cooking methods with modern techniques, ensuring every dish offers a unique and unforgettable dining experience.
                    </p> */}
                    <span className='pl-4 text-2xl flex gap-x-3'><FaInstagram/><FaLinkedin/><FaSquareXTwitter/></span>
                </div>

                <div className='px-6  space-y-2'>
                    <h1 className='text-xl text-yellow-500 font-serif'>Navigate</h1>
                    <div className='flex space-x-9'>
                        <nav className='list-none space-y-2'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/menu"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    Menu
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    Gallery
                                </NavLink>
                            </li>
                        </nav>
                        <nav className='list-none space-y-2'>
                            <li>
                                <NavLink
                                    to="/reserve"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    Reserve
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/order"
                                    className={({ isActive }) => isActive ? 'text-yellow-500' : ''}
                                >
                                    Order Now
                                </NavLink>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className='px-6  space-y-2'>
                    <h1 className='text-xl text-yellow-500 font-serif'>Contact Us</h1>
                    <h2>+91 98998 99999</h2>
                    <h2>www.spicesymphony.com</h2>
                    <h2>spicesymphony@gmail.com</h2>
                    <h2>123 Anywhere ST., Any City, ST 12345</h2>
                </div>
            </div>
            <div className="mt-6 text-xs flex justify-center">
                &copy; 2023 Spice Symphony. All Rights Reserved.
            </div>
        </>
    );
}

export default Footer;
