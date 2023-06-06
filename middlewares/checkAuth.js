const jwt = require("jsonwebtoken");
const { throwError, catchError } = require("../utils/errorHandling");

module.exports = (req, res, next) => {
  try {
    let decodedToken;
    const token = req.cookies.token;
    if (!token) {
      throwError("access denied", 400);
    }
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      throwError("access denied", 400);
    }
    if (!decodedToken) {
      throwError("access denied", 400);
    } else {
      if (typeof decodedToken !== "string") {
        // Get data from decoded token
        // req.example = decodedToken.example;
      }
      next();
    }
  } catch (error) {
    catchError(error, next);
  }
};
