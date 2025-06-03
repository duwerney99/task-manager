const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/", taskController.registerTask);
router.get("/", taskController.findAll);
router.put("/:id", taskController.updateStatus);
router.delete("/:id", taskController.deleteTask);


module.exports = router;