const jwt = require("jsonwebtoken");

exports.generateJwt = async (data) => {
  const token = jwt.sign(data, process.env.ADMIN_SECRET_KEY, {});
  return token;
};
