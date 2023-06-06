exports.throwError = (message, statusCode) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  throw err;
};

exports.catchError = (error, next) => {
  if (!error.message) error.message = "Server Error";
  console.log(error);
  return next(error);
};
