import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Function to check the token
    const checkToken = () => {
      const savedToken = localStorage.getItem('jwtToken');
      console.log(savedToken);
      setToken(savedToken);
    };

    // Check the token initially
    checkToken();

    // Set an interval to check for the token every 5 seconds (adjust as needed)
    const tokenCheckInterval = setInterval(() => {
      checkToken();
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(tokenCheckInterval);
  }, []); // Empty dependency array to run only on mount and unmount

  const Logout = () => {
    localStorage.setItem('jwtToken', "");
    setToken(null); // Update state to trigger a re-render
  };

  return (
    <div className='p-5 flex justify-between'>
      <div className='flex'>
        {/* <div className='py-1'>Logo</div> */}
        <div className='px-4 text-center text-2xl font-serif '
          style={{
            background: "linear-gradient(45deg, rgb(255, 204, 0), rgb(139, 69, 19))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }} >Spice Symphony</div>
      </div>
      <div>
        <nav className='list-none flex space-x-6 px-2'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-yellow-500' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'text-yellow-500' : '')}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? 'text-yellow-500' : '')}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? 'text-yellow-500' : '')}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reserve"
              className={({ isActive }) => (isActive ? 'text-yellow-500' : '')}
            >
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'text-yellow-500' : '')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            {token !== "" ? (
              <button onClick={Logout} className='bg-yellow-400 py-1 px-3 rounded-md text-black'>Logout</button>
            ) : (
              <NavLink
                to="/login"
                className={({isActive})=>`bg-yellow-500 text-black py-1 px-3 rounded-md ${ isActive ? 'font-bold' : 'font-normal'}` }
              >
                Login
              </NavLink>
            )}
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Header;
