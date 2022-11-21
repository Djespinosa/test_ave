const express = require("express");
const router = express.Router();
const problem4Controller = require("../controllers/problem4Controller");

router.get("/", problem4Controller.index);

module.exports = router;