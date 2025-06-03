const TaskRespositoryFirestore = require("../../infraestructure/repositories/taskRepositoryFirestore");
const registerTask = require("../../application/services/task/registerTask");
const findAllTasks = require("../../application/services/task/findAllTasks");
const updateTaskStatus = require("../../application/services/task/updateTaskStatus");
const deleteTask = require("../../application/services/task/deleteTask");

const taskRepository = new TaskRespositoryFirestore();
const registerTaskService = registerTask(taskRepository);
const findAllTasksService = findAllTasks(taskRepository);
const updateTaskStatusService = updateTaskStatus(taskRepository);
const deleteTaskService = deleteTask(taskRepository);

const taskController = {
    registerTask: async (req, res) => {
        try {
            const newTask = await registerTaskService.execute(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            console.error("Error create task: ", error);
            res.status(500).json({ error: 'Error trying create task ' });
        }
    },

    findAll: async (req, res) => {
        try {
            const tasks = await findAllTasksService.execute();
            res.status(200).json(tasks);
        } catch (error) {
            console.error("Error get tasks: ", error);
            res.status(500).json({ error: 'Error trying get tasks ' });
        }
    },

    updateStatus: async (req, res) => {
        try {
            const { status } = req.body;
            const { id } = req.params;

            const updateTask = await updateTaskStatusService.execute({ id, status });
            res.status(200).json(updateTask);
        } catch (error) {
            console.error("Error updating task:", error);
            res.status(400).json({ error: error.message || 'Error updating task' });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await deleteTaskService.execute({ id } );
            res.status(200).json({ message: 'Task deleted', ...result });
        } catch (error) {
            console.error("Error deleting task:", error);
            res.status(400).json({ error: error.message || 'Error deleting task' });
        }
    }
};


module.exports = taskController;