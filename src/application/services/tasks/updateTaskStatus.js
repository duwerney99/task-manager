module.exports = (taskRepository) => {
  return {
    execute: async ({ id, status }) => {
      if (!id || !status) {
        throw new Error("ID y status are required !!");
      }

      if (!['pendiente', 'completada'].includes(status)) {
        throw new Error("Invalid state");
      }

      return await taskRepository.updateStatus(id, status);
    }
  };
};
