import React from "react";
import Header from "./Components/header"; // Import the Header component
import ReservationPage from "./ReservationPage"; // Import the ReservationPage component

function App() {
  return (
    <div>
      <Header /> {/* Render the Header component */}
      <ReservationPage /> {/* Render the ReservationPage component */}
    </div>
  );
}

export default App;
