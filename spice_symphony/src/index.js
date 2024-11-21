import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import LoginPage from './Components/login';
import RegisterPage from './Components/register'
import AboutUs from './pages/aboutus_page';
import OrderPage from './pages/order_page';
import MenuPage from './pages/menu_page';
import HomePage from "./pages/home_page";
import GalleryPage from "./pages/gallery_page"
import ReservationPage from './pages/reservation_page';
import ContactPage from './pages/contact_page';
import CreateNewDishPage from './Components/admin_newdish';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/menu',
    element: <MenuPage />
  },
  {
    path: '/gallery',
    element: <GalleryPage />
  },
  {
    path: '/reserve',
    element: <ReservationPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }, {
    path: '/login',
    element: <LoginPage />
  }, {
    path: '/register',
    element: <RegisterPage />
  }, {
    
    path: '/order',
    element: <OrderPage/>
  },
  {
    path: '/newdish',
    element: <CreateNewDishPage/>
  },

]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();