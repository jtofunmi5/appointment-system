const Appointment = require("../models/appointmentModel");

// Create Appointment
const createAppointment = async (req, res) => {
  try {
    const { serviceType, date, time } = req.body;

    if (!serviceType || !date || !time) {
      return res.status(400).json({
        message: "Service type, date and time are required",
      });
    }

    const appointment = await Appointment.create({
      serviceType,
      date,
      time,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create appointment",
      error: error.message,
    });
  }
};

// ✅ Get ONLY logged-in user's appointments
const getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getUserAppointments,
};
