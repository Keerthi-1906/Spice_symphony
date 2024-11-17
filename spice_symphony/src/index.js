import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AboutUs from './Components/about_us';
// import MenuPage from './pages/menu_page';
// import OrderPage from './pages/order_page';
import LoginPage from './Components/login';
// import HomePage from './pages/home_page'
// import RegisterPage from './Components/register';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <OrderPage/> */}
    <LoginPage/>
    {/* <RegisterPage/> */}
    {/* <HomePage/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();