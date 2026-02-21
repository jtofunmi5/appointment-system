import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../ExternalComponent/Navbar";

const services = [
  {
    id: 1,
    name: "Geriatric Health Consultation",
    duration: "30 mins",
  },
  {
    id: 2,
    name: "Cognitive Assessment",
    duration: "45 mins",
  },
  {
    id: 3,
    name: "Physical Therapy Session",
    duration: "60 mins",
  },
  {
    id: 4,
    name: "Nutrition & Wellness Review",
    duration: "30 mins",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function BookAppointment() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Please select service, date, and time");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/appointments/create-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            serviceType: selectedService.name,
            date: selectedDate,
            time: selectedTime,
            notes: "",
          }),
        },
      );

      const data = await response.json();

      if (!token) {
        alert("You must be logged in");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Appointment booked successfully ✅");
      navigate("/dashboard");
    } catch (error) {
      alert("Something went wrong", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Book an Appointment
          </h1>
          <p className="text-gray-600 mb-6">
            Gerontology Care & Wellness Center
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Select a Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`border rounded-xl p-4 text-left transition
                    ${
                      selectedService?.id === service.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <h3 className="font-semibold text-gray-800">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Duration: {service.duration}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Choose a Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Select a Time
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`border rounded-lg p-3 text-center text-lg transition
                    ${
                      selectedTime === time
                        ? "bg-blue-600 text-white"
                        : "border-gray-300 hover:bg-blue-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
