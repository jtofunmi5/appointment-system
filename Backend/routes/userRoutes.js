const expressApp = require("express");
const {
  registerUser,
  loginUser,
  // getAllUsers,
  logoutUser,
} = require("../controller/userController");

const { createAppointment } = require("../controller/appointmentController");

const router = expressApp.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);
router.post("/create-appointment", createAppointment);
router.post("/logout", logoutUser);

// router.post("/logout", logoutUser);

// router.get("/", getAllUsers);

module.exports = router;
