import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='p-5 flex justify-between'>
            <div className='flex'>
                <div className='py-1'>Logo</div>
                <div className='px-4 text-2xl'>Spice Symphony</div>
            </div>
            <div>
                <nav className='list-none flex space-x-6 px-2'>
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
                </nav>
            </div>
        </div>
    );
}

export default Header;
