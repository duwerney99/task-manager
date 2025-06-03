module.exports = (taskRepository) => {
  return {
    execute: async (id) => {
      if (!id) throw new Error("ID required !!");
      const task = await taskRepository.findById(id);
      if (!task) throw new Error("Task not found");
      return task;
    }
  };
};
