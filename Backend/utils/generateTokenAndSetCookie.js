const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign(
    { id: userId }, // ✅ MUST be "id"
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  return token;
};

module.exports = generateTokenAndSetCookie;
