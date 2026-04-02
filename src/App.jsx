import React, {Suspense, lazy} from "react"
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AppointmentLoader from "./component/AppointmentLoader";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const BookAppointment = lazy(() => import("./pages/Bookappointment"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));

const AppointmentPage = lazy(() => import('./component/AppointmentLoader'));

function App() {
  return (
    <div>
      <Suspense fallback = {<AppointmentLoader/>} >
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
    </Suspense>
     
    </div>
  );
}

export default App;
