// src/tests/application/services/tasks/registerTask.test.js

const registerTask = require('../../../../src/application/services/tasks/registerTask');

describe('registerTask Use Case', () => {
  const mockRepository = {
    registerTask: jest.fn()
  };

  const registerTaskService = registerTask(mockRepository);

  it('Debe registrar una nueva tarea', async () => {
    const mockTask = {
      title: 'agregar nueva tarea',
      description: 'Desarrollando una app de tareas',
      status: 'pendiente',
    };

    const expectedResponse = {
      id: 'mocked-id',
      ...mockTask
    };

    mockRepository.registerTask.mockResolvedValue(expectedResponse);

    const result = await registerTaskService.execute(mockTask);

    expect(mockRepository.registerTask).toHaveBeenCalledWith(mockTask);
    expect(result).toEqual(expectedResponse);
  });

  it('debería lanzar un error si falla el repositorio', async () => {
    mockRepository.registerTask.mockRejectedValue(new Error('Error al registrar'));

    await expect(registerTaskService.execute({})).rejects.toThrow('Error al registrar');
  });
});
