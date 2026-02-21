import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../ExternalComponent/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData,
      );

      localStorage.setItem("token", res.data.token);

      setMessage("Login successful ✅");

      // small delay so user sees success message
      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-gray-100 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {message && (
            <p
              className={`text-center mb-4 text-sm ${
                message.includes("successful")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Password Field with Show/Hide */}
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-blue-600 hover:text-blue-800"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <Link to="/register">
            <p className="text-center mt-4 text-blue-600 hover:underline">
              Don't have an account? Sign Up
            </p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
