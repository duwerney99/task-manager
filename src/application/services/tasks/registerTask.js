module.exports = (taskRepository) => {
    return { 
        execute: async (taskData) => {
            return await taskRepository.registerTask(taskData);
        }
    }
}