const express = require("express");
const router = express.Router();
const problem7Controller = require("../controllers/problem7Controller");

router.get("/", problem7Controller.index);

module.exports = router;