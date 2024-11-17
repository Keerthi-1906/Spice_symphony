import React from "react";
import Header from "./Components/header"; // Import the Header component
import ReservationPage from "./ReservationPage"; // Import the ReservationPage component
import HeroSection from "./Components/HeroSection"; // Import HeroSection component

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <HeroSection /> {/* Render the HeroSection component */}
      <ReservationPage /> {/* Render the ReservationPage component */}
    </div>
  );
}

export default App;
