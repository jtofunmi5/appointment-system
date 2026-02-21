const expressApp = require("express");
const router = expressApp.Router();

const {
  createAppointment,
  getUserAppointments,
} = require("../controller/appointmentController");
const protect = require("../middleware/authmiddleware");

router.post("/create-appointment", protect, createAppointment);
router.get("/user-appointments", protect, getUserAppointments);

module.exports = router;
