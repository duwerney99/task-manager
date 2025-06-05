const findTaskById = require('../../../../src/application/services/tasks/findTaskById');

describe('findTaskById Use Case', () => {
  const mockRepository = {
    findById: jest.fn()
  };

  const findTaskByIdService = findTaskById(mockRepository);

  it('debería retornar una tarea existente por ID', async () => {
    const mockTask = {
      id: '123',
      title: 'Tarea 1',
      description: 'Desc',
      status: 'pendiente'
    };

    mockRepository.findById.mockResolvedValue(mockTask);

    const result = await findTaskByIdService.execute('123');

    expect(mockRepository.findById).toHaveBeenCalledWith('123');
    expect(result).toEqual(mockTask);
  });

  it('debería lanzar un error si no se proporciona un ID', async () => {
    await expect(findTaskByIdService.execute()).rejects.toThrow('ID required !!');
  });

  it('debería lanzar un error si el repositorio falla', async () => {
    mockRepository.findById.mockRejectedValue(new Error('Fallo de base de datos'));

    await expect(findTaskByIdService.execute('456')).rejects.toThrow('Fallo de base de datos');
  });
});
