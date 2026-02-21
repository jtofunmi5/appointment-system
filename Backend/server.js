const expressApp = require("express");
const app = expressApp();
const cors = require("cors");
require("dotenv").config();
require("./db");
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cookieParser = require("cookie-parser");

// const userRoutes = require("./routes/userRoutes");

app.use(cors()); //cors middleware
app.use(expressApp.json());
app.use(expressApp.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
