const express = require("express");
const router = express.Router();
const problem1Controller = require("../controllers/problem1Controller");

router.get("/", problem1Controller.index);

module.exports = router;