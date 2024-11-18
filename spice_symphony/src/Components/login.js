import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom'; // For redirecting after login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Send login request
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      // Check if login is successful (status 200)
      if (response.status === 200) {
        // Store the JWT token in localStorage
        console.log(response.data)
        localStorage.setItem('jwtToken', response.data.accessToken);

        // Redirect to dashboard or another page
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error.response);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-black"
      style={{
        backgroundImage: "url('/foodbg_black.jpg')", // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8,
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">Spicy Symphony</h1>

        <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-112">
          <h2 className="text-3xl font-bold text-center mb-6">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">PASSWORD</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
                required
              />

            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-400 transition duration-300"
            >
              Login
            </button>
          </form>

          {errorMessage && (
            <p className="mt-4 text-center text-red-500">{errorMessage}</p>
          )}

          <p className="mt-4 text-center">
            Don’t have an account? <Link to="/register" className="text-blue-400 hover:underline">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
