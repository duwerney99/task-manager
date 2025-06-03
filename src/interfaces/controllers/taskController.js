const TaskRespositoryFirestore = require("../../infraestructure/repositories/taskRepositoryFirestore");
const registerTask = require("../../application/services/task/registerTask");


const taskRepository = new TaskRespositoryFirestore();
const registerTaskService = registerTask(taskRepository);


const taskController = {
    registerTask: async (req, res) => {
        try {
            console.log("reque ", req.body);
            const newTask = await registerTaskService.execute(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            console.error("Error create task: ", error);
            res.status(500).json({ error: 'Error trying create task '});
        }
    }
};


module.exports = taskController;