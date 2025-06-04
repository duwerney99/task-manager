const updateTaskStatus = require('../../../../src/application/services/tasks/updateTaskStatus');

describe('updateTaskStatus Use Case', () => {
  const mockRepository = {
    updateStatus: jest.fn()
  };

  const updateTaskStatusService = updateTaskStatus(mockRepository);

  it('debe actualizar el estado de una tarea correctamente', async () => {
    const id = 'abc123';
    const status = 'completada';

    const mockResult = {
      id,
      status,
    };

    mockRepository.updateStatus.mockResolvedValue(mockResult);

    const result = await updateTaskStatusService.execute({ id, status });

    expect(mockRepository.updateStatus).toHaveBeenCalledWith(id, status);
    expect(result).toEqual(mockResult);
  });

  it('debería lanzar un error si no se proporciona ID', async () => {
    await expect(updateTaskStatusService.execute({ status: 'pendiente' }))
      .rejects.toThrow('ID required !!');
  });

  it('debería lanzar un error si no se proporciona status', async () => {
    await expect(updateTaskStatusService.execute({ id: 'abc123' }))
      .rejects.toThrow('Invalid state');
  });

  it('debería lanzar un error si el repositorio falla', async () => {
    mockRepository.updateStatus.mockRejectedValue(new Error('Error al actualizar'));

    await expect(updateTaskStatusService.execute({ id: '123', status: 'completada' }))
      .rejects.toThrow('Error al actualizar');
  });
});
