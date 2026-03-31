import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookAppointment from "./pages/Bookappointment";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="bookappointment" element={<BookAppointment />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
