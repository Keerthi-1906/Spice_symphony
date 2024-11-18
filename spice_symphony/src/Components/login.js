// LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
    const [isAdmin, setIsAdmin] = useState(false); // State to toggle between user and admin login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement your login logic here
        console.log(isAdmin ? 'Admin Login' : 'User Login', { email, password });
        
        if (isAdmin) {
            // Check admin credentials here
        } else {
            // Check user credentials here
        }
    };

    return (
        <div
            className="flex items-center justify-center h-screen bg-black"
            style={{
                backgroundImage: "url('/foodbg_black.jpg')", // Replace with your actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 1,
            }}
        >
            <div className="flex flex-col items-center"> {/* Container for centering */}
                <h1 className="text-4xl font-bold text-yellow-500 mb-8">Spice Symphony</h1> {/* Centered Header */}

                <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-112"> {/* Login Box */}
                    <h2 className="text-3xl font-bold text-center mb-6">{isAdmin ? "ADMIN LOGIN" : "LOGIN"}</h2>
                    
                    {/* Toggle for Admin User */}
                    <div className="flex justify-center mb-4">
                        <label className="mr-2">
                            <input 
                                type="checkbox" 
                                checked={isAdmin} 
                                onChange={() => setIsAdmin(!isAdmin)} 
                            />
                            <span className="ml-1">Admin Login</span>
                        </label>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-1">EMAIL</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-1">PASSWORD</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-400 transition duration-300"
                        >
                            {isAdmin ? "Admin Login" : "Login"}
                        </button>
                    </form>

                    <p className="mt-4 text-center">
                        Don’t have an account? <a href="#" className="text-blue-400 hover:underline">Register here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
