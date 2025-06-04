const findAllTasks = require('../../../../src/application/services/tasks/findAllTasks');

describe('findAllTasks Use Case', () => {
  const mockRepository = {
    findAll: jest.fn()
  };

  const findAllTasksService = findAllTasks(mockRepository);

  it('Debe retornar todas las tareas correctamente', async () => {
    const mockTasks = [
      { id: '1', title: 'Tarea 1', description: 'Desc 1', status: 'pendiente' },
      { id: '2', title: 'Tarea 2', description: 'Desc 2', status: 'completada' }
    ];

    mockRepository.findAll.mockResolvedValue(mockTasks);

    const result = await findAllTasksService.execute();

    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockTasks);
  });

  it('debería lanzar un error si el repositorio falla', async () => {
    mockRepository.findAll.mockRejectedValue(new Error('Error al obtener tareas'));

    await expect(findAllTasksService.execute()).rejects.toThrow('Error al obtener tareas');
  });
});
