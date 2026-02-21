import React from "react";
import { Calendar, Clock, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/");
  };

  // React.useEffect(() => {
  //   const fetchAppointments = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:5000/api/appointments/user-appointments",
  //       );
  //       if (!response.ok) throw new Error("Failed to fetch appointments");
  //       const data = await response.json();
  //       setBookings(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAppointments();
  // }, []);
  React.useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/appointments/user-appointments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) throw new Error("Failed to fetch appointments");

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading appointments...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end items-center">
          <Link to="/">
            <button className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg hover:text-blue-500 transition mb-4 text-end">
              Back to Home
            </button>
          </Link>
          {token && (
            <button
              className="bg-white text-gray-800 font-bold px-4 py-2 rounded-lg hover:text-blue-500 transition mb-4 text-end"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h1>
        <Link to="/bookappointment">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4">
            Book New Appointment
          </button>
        </Link>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-center gap-3">
              <Stethoscope className="text-blue-600" />
              <div>
                <p className="text-gray-500 text-sm">Total Appointments</p>
                <h2 className="text-xl font-semibold">{bookings.length}</h2>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Upcoming</p>
            <h2 className="text-xl font-semibold">
              {bookings.filter((b) => new Date(b.date) > new Date()).length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Past</p>
            <h2 className="text-xl font-semibold">
              {bookings.filter((b) => new Date(b.date) <= new Date()).length}
            </h2>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Appointments</h2>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500 text-left">
                <th className="py-3">Service</th>
                <th className="py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((appointment, index) => (
                <motion.tr
                  key={appointment._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4 font-medium">
                    {appointment.serviceType}
                  </td>

                  <td className="py-4 flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>

                  <td className="py-4 flex items-center gap-2">
                    <Clock size={16} />
                    {appointment.time}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
