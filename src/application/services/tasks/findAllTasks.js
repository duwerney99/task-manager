module.exports = (taskRepository) => {
    return { 
        execute: async () => {
            return await taskRepository.findAll();
        }
    }
}