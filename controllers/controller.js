exports.getController = (req, res, next) => {
  res.status(200).json({
    message: "GET request successful",
  });
};

exports.postController = (req, res, next) => {
  res.status(200).json({
    message: "POST request successful",
  });
};

exports.putController = (req, res, next) => {
  res.status(200).json({
    message: "PUT request successful",
  });
};

exports.deleteController = (req, res, next) => {
  res.status(200).json({
    message: "DELETE request successful",
  });
};
