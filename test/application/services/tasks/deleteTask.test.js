const deleteTask = require('../../../../src/application/services/tasks/deleteTask');

describe('deleteTask Use Case', () => {
  let mockTaskRepository;
  let deleteTaskService;

  beforeEach(() => {
    mockTaskRepository = {
      deleteTask: jest.fn()
    };

    deleteTaskService = deleteTask(mockTaskRepository);
  });

  it('debe eliminar una tarea por su ID', async () => {
    const taskId = 'abc123';
    const deletedTask = { id: taskId };
    mockTaskRepository.deleteTask.mockResolvedValue(deletedTask);

    const result = await deleteTaskService.execute({ id: taskId });

    expect(result).toEqual(deletedTask);
    expect(mockTaskRepository.deleteTask).toHaveBeenCalledWith(taskId);
  });

  it('debería lanzar un error si no se proporciona el ID', async () => {
    await expect(deleteTaskService.execute({}))
      .rejects
      .toThrow('ID required !!');
  });

  it('debería lanzar un error si el repositorio falla', async () => {
    const taskId = 'abc123';
    mockTaskRepository.deleteTask.mockRejectedValue(new Error('Database error'));

    await expect(deleteTaskService.execute({ id: taskId }))
      .rejects
      .toThrow('Database error');
  });
});
