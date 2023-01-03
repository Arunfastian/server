const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
module.exports = function(req, res, next) {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(400).send("Access Denied");
    const verified = JWT.verify(token,process.env.JWT_SECRET);
    if(!verified) return res.status(400).send("Access Denied");

    req.user = verified
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send("Check Token Internal Server Error");
  }
}
