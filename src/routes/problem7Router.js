const express = require("express");
const router = express.Router();
const problem7Controller = require("../controllers/problem7Controller");

router.get("/", problem7Controller.index);
router.post("/", problem7Controller.addtask);
router.delete("/delete/:id", problem7Controller.delete);


module.exports = router;