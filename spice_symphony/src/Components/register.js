import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  // State for form fields and error message
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To navigate to another page after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      // Send registration request to the backend API
      const response = await axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
      });

      // If registration is successful
      if (response.status === 200) {
        // Optionally, you can store the JWT token or any other session information
        // localStorage.setItem('jwtToken', response.data.token);

        // Redirect to login page after successful registration
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration failed:", error.response);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div 
      className="flex items-center justify-center h-screen" // Greyish background
      style={{
        backgroundImage: "url('/foodbg_black.jpg')", // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8,
      }}
    >
      <div className="flex flex-col items-center"> {/* Container for centering */}
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">Spicy Symphony</h1> {/* Centered Header */}
        
        <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-112"> {/* Register Box */}
          <h2 className="text-3xl font-bold text-center mb-6">REGISTER</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">NAME</label> {/* Name Field */}
              <input 
                type="text" 
                value={username}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">EMAIL</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">PASSWORD</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-1">CONFIRM PASSWORD</label>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password" 
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-400 transition duration-300"
            >
              Register
            </button>
          </form>

          {/* Display error message if any */}
          {errorMessage && (
            <p className="mt-4 text-center text-red-500">{errorMessage}</p>
          )}

          <p className="mt-4 text-center">
            Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
