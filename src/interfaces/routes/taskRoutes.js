const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const validate = require('../middlewares/validate');
const { 
    taskSchema,
    updateTaskStatusSchema,
    idParamSchema
} = require('../validators/taskValidator');

 
router.post("/", validate(taskSchema), taskController.registerTask);

router.get("/", taskController.findAll);

router.get('/:id', validate(idParamSchema, 'params'), taskController.findById);

router.put("/:id", validate(idParamSchema, 'params'), validate(updateTaskStatusSchema), taskController.updateStatus);

router.delete("/:id", validate(idParamSchema, 'params'), taskController.deleteTask);




module.exports = router;