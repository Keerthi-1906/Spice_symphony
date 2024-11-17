import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
// import HomePage from './pages/home_page';
// import Gallery from './pages/gallery_page';
import GalleryPage from './pages/gallery_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GalleryPage/>
=======
<<<<<<< HEAD
import AboutUs from './Components/about_us';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutUs/> {/* Use your components here */}
=======
import MenuPage from './pages/menu_page';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuPage/>
>>>>>>> 24f3dd3575a6980bc1baf4506ce4d6be0143c71c
>>>>>>> 2f31dcdde87f2fd4a6b720530ae9b8301bb63bfa
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
