module.exports = (taskRepository) => {
  return {
    execute: async ({ id, status }) => {
      if (!id) {
        throw new Error("ID required !!");
      }

      if (!['pendiente', 'completada'].includes(status)) {
        throw new Error("Invalid state");
      }

      return await taskRepository.updateStatus(id, status);
    }
  };
};
