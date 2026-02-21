import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../ExternalComponent/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 🔐 Password validation checks
  const passwordChecks = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[^A-Za-z0-9]/.test(formData.password),
  };

  const passwordMatch =
    formData.password && formData.password === formData.confirmPassword;

  const strengthScore = Object.values(passwordChecks).filter(Boolean).length;

  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-600",
  ];

  const isFormValid =
    strengthScore === 5 && passwordMatch && formData.name && formData.email;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setMessage("Please complete all fields correctly.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const Requirement = ({ valid, text }) => (
    <li
      className={`flex items-center gap-2 text-sm ${
        valid ? "text-green-600" : "text-gray-500"
      }`}
    >
      <span>{valid ? "✔" : "✖"}</span>
      {text}
    </li>
  );

  return (
    <>
      <Navbar />
      <div className="py-14 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          {message && (
            <p className="text-center mb-4 text-sm text-red-500">{message}</p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Password Field */}
          <div className="relative mb-2">
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
              className="absolute right-3 top-3 text-sm text-blue-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Strength Meter */}
          {formData.password && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded h-2 mb-2">
                <div
                  className={`h-2 rounded ${strengthColors[strengthScore - 1]}`}
                  style={{ width: `${(strengthScore / 5) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm font-medium">
                Strength: {strengthLabels[strengthScore - 1] || "Very Weak"}
              </p>

              <ul className="mt-2 space-y-1">
                <Requirement
                  valid={passwordChecks.length}
                  text="At least 8 characters"
                />
                <Requirement
                  valid={passwordChecks.uppercase}
                  text="One uppercase letter"
                />
                <Requirement
                  valid={passwordChecks.lowercase}
                  text="One lowercase letter"
                />
                <Requirement valid={passwordChecks.number} text="One number" />
                <Requirement
                  valid={passwordChecks.special}
                  text="One special character"
                />
              </ul>
            </div>
          )}

          {/* Confirm Password */}
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={`w-full p-3 border rounded mb-4 focus:ring-2 outline-none ${
              formData.confirmPassword
                ? passwordMatch
                  ? "border-green-500 focus:ring-green-400"
                  : "border-red-500 focus:ring-red-400"
                : ""
            }`}
          />

          {formData.confirmPassword && !passwordMatch && (
            <p className="text-sm text-red-500 mb-4">Passwords do not match</p>
          )}

          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full p-3 rounded text-white font-semibold transition ${
              !isFormValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
