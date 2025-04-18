const express = require("express");
const router = express.Router();

const {createPost, getPostById} = require("../controllers/postController");

router.post("/posts", createPost);
router.get("/:id", getPostById);

module.exports = router;