import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Final() {
    const navigate = useNavigate();

    useEffect(() => {
        const submitOrder = async () => {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                navigate("/login");
                return;
            }
            try {
                const response = await axios.post(
                    'http://localhost:5000/api/users/addorder',
                    { order_dishes: [] },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                console.log("Cart successfully submitted:", response.data);
            } catch (error) {
                console.error("Error submitting cart:", error);
            }
            localStorage.removeItem("cart");
        };

        submitOrder();
    }, []); 

    return (
        <div className="w-full h-screen bg-black text-white flex flex-col font-serif items-center justify-center p-4">
            <h1 className="text-4xl font-extrabold text-center mb-4">Order Placed Successfully!</h1>
            <div className="text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-2">Thank you for your order!</h2>
                <p className="text-sm text-center mb-6">Your order is being processed</p>
                <Link to="/" className="text-blue-400 hover:underline">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Final;
