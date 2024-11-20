import React from 'react';
import { TbCurrencyRupee, } from "react-icons/tb";
// import CreateDishPage from './admin_newdish';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminCard({
    type,
    img,
    title,
    price,
    disc,
    spicy = false,
    veg = true,
    callback,
}) {
    // const navigate = useNavigate();
    console.log(`card rerender ${title}`);
    const navigate = useNavigate();
    const updatedish = () => {
        navigate("/dish", {
            state: {
                name: title,
                type: type,
                title: "Update Dish",
                price: price,
                disc: disc,
                spicy: spicy,
                vegetarian: veg,
                image: img
            }
        });
        // <CreateDishPage name={title} title="Update Dish" price={price} disc={disc} spicy={spicy} vegetarian={veg} />
    }
    const deletedish = async () => {
        try {
            await axios.delete("http://localhost:5000/api/menu/delete-dish",
                {
                    data: {
                        type: type,
                        name: title,
                    }
                })
            await callback();
            // navigate('/adminmenu');
        } catch (error) {
            console.log("vkjevjkebrvk")
            console.log(error);
        }
    }
    return (
        <div className='bg-white rounded-md w-80 text-black'>
            <img src={img} alt="food" className='w-80 rounded-md' />

            <div className='p-4'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='text-sm pt-3 h-16'>{disc}</p>
            </div>

            <div className='flex justify-between pb-5 pl-3'>
                <div className='flex'>
                    {veg ? (
                        <img src="/veg.png" alt="veg symbol" className='w-8 h-8' />
                    ) : (
                        <img src="/non-veg.jpg" alt="non-veg symbol" className='w-8 h-8' />
                    )}

                    {spicy && (
                        <img src="/spicy.jpg" alt="spicy" className='w-6 h-6 mt-1' />
                    )}
                </div>

                <div className='flex'>
                    <span className='text-2xl align-middle my-1'>
                        <TbCurrencyRupee />
                    </span>
                    <h1 className='text-2xl pr-6'>{price}</h1>
                </div>
                <div className='flex p-1'>
                    <button className='bg-yellow-400 rounded-md px-3 py-2 mx-1' onClick={updatedish}>Update</button>
                    <button className='bg-yellow-400 rounded-md px-3 py-2' onClick={deletedish}>Delete</button>
                </div>
            </div>

        </div>
    );
}

export default AdminCard;
