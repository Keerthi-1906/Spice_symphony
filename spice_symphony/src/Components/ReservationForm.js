import React from "react";

const ReservationPage = () => {
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
            <form className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <input
                  type="text"
                  placeholder="Phone no"
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                />
              </div>

              {/* Number of People */}
              <input
                type="number"
                placeholder="No of people"
                className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
              />

              {/* Message */}
              <textarea
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

export default ReservationPage;