module.exports = (taskRepository) => {
  return {
    execute: async ({ id }) => {
      if (!id) {
        throw new Error("ID required !!");
      }

      return await taskRepository.deleteTask(id);
    }
  };
};
