// MenuPage.js
import React from 'react';

const MenuPage = ({ isAdmin, onCreateDish, onDeleteDish }) => {
    return (
        <div className="flex flex-col items-center p-8 bg-gray-200">
            <h1 className="text-4xl font-bold mb-8">Menu Page</h1>
            {isAdmin && (
                <div className="flex space-x-4">
                    <button 
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
                        onClick={onCreateDish}
                    >
                        Create New Dish
                    </button>
                    <button 
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400"
                        onClick={onDeleteDish}
                    >
                        Delete Dish
                    </button>
                </div>
            )}
        </div>
    );
};

export default MenuPage;