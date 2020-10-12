const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res
        .status(401)
        .json({ message: "No Authentication Token,  Authorization denied" });
    }

    const isVerified = await jwt.verify(token, process.env.JWT_SECRET);
    if (!isVerified) {
      return res
        .status(401)
        .json({ message: "Token Verification Failed, Authorization Denied" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = auth;
