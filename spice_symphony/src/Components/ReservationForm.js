import React, { useState } from "react";

const Reservation = () => {
  // State to store input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");
  const [reservationStatus, setReservationStatus] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !phone || !date || !time || !people || !message) {
      alert("All fields are required.");
      return;
    }

    // If validation passes, set reservation status
    setReservationStatus("Table Reserved! We'll see you soon.");

    // Reset form fields (optional)
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setPeople("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-[1200px] bg-black rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative">
            <img
              src="reservation.jpg"
              alt="Dining Table"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Form Section */}
          <div>
            <h1 className="text-4xl font-bold text-yellow-500 mb-6">Reservation</h1>
            {reservationStatus && (
              <div className="mb-6 p-4 text-center bg-yellow-500 text-black rounded-md">
                {reservationStatus}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone no"
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
              </div>

              {/* Number of People */}
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                placeholder="No of people"
                className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
              />

              {/* Message */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition"
              >
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
