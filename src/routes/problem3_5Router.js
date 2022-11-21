const express = require("express");
const router = express.Router();
const problem3_5Controller = require("../controllers/problem3_5Controller");

router.get("/", problem3_5Controller.index);

module.exports = router;