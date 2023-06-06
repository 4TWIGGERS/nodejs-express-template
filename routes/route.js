const router = require("express").Router();
const {
  getController,
  postController,
  putController,
  deleteController,
} = require("../controllers/controller");

// GET
router.get("/get", getController);

// POST
router.post("/post", postController);

// PUT
router.put("/put", putController);

// DELETE
router.delete("/delete", deleteController);

module.exports = router;
