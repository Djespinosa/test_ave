const express = require("express");
const router = express.Router();
const problem2Controller = require("../controllers/problem1Controller");

router.get("/", problem2Controller.index);

module.exports = router;