const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/", taskController.registerTask);
router.get("/", taskController.findAll);


module.exports = router;