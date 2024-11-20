import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import AdminCard from './admin_card';
// import CreateDishPage from './admin_newdish';
import { useNavigate } from 'react-router-dom';
function AdminMenu() {
    const [data, setmenudata] = useState([]);
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    const getData = async () => {
        try {
            const token = localStorage.getItem("jwtToken");
            if(!token){
                navigate("/login");
            }
            const response = await axios.get("http://localhost:5000/api/menu/get-admin-menu",
                { headers: { Authorization: `Bearer ${token}` } }

            );
            console.log(response.data);
            setmenudata(response.data);
            if (response.data.length > 0) {
                setSelected(response.data[0]?.type || "");
            }
        } catch (error) {
            navigate("/login")
            console.error("Error fetching menu data:", error);
        }
    };
    useEffect(() => {
        getData();

    },[])

    const getDishes = () => {
        for (let category of data) {
            if (category.type === selected) {
                return category.dishes;
            }
        }
        return [];
    };

    const addnewitem = () => {
        navigate("/dish", {
            state: {
                name: "",
                type: "",
                title: "Add New Dish",
                price: 0,
                disc: "",
                spicy: false,
                vegetarian: true,
                image: "/default.png"
            }
        });
    }

    return (
        <div className="p-12">
            <h1 className="flex text-4xl text-yellow-300 justify-center">Menu</h1>
            <div className="flex justify-center">
                {data.map((category) =>
                    <button
                        key={category._id}
                        onClick={() => setSelected(category.type)}
                        className="rounded-full m-5 px-4 p-2 border-yellow-400 border-2 flex-wrap"
                        style={{
                            backgroundColor: category.type === selected ? "#f8cf40" : "transparent",
                            color: category.type === selected ? "black" : "white",
                        }}
                    >
                        {category.type}
                    </button>
                )}
            </div>

            <div className="flex justify-center">
                <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {getDishes().map((dish) => (
                        <AdminCard
                            key={dish._id}
                            title={dish.name}
                            disc={dish.description}
                            price={dish.price}
                            img={dish.image}
                            veg={dish.vegetarian}
                            spicy={dish.spicy}
                            type={selected}
                            callback={getData}
                        />
                    ))}
                </div>
            </div>
            <div className='fixed bottom-5 right-3'>
                <button className='bg-yellow-400 rounded-md px-3 py-2 text-black' onClick={addnewitem}>Add new item</button>

            </div>

        </div>
    )
}

export default AdminMenu