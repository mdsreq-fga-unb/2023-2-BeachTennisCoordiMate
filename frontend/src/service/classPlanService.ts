import Apiservice from './apiService';

class ClassPlanService extends Apiservice {
  constructor() {
    super('/classPlan');
  }

  async save(data: any) {
    return this.post('/', data);
  }

  async getById(id: string) {
    return this.get('/' + id);
  }

  async getManyById(userId: string) {
    return this.get('/planos-usuario/' + userId);
  }

  async remove(id: string) {
    return this.delete('/' + id);
  }

  async updateById(id: string, data: any) {
    return this.put('/' + id, data);
  }

  async getManyByTitleOrDate(
    userId: string,
    title: string,
    startDate: string,
    finalDate: string,
  ) {
    return this.get(
      '/pesquisa-data-titulo/' +
        userId +
        '/' +
        title +
        '/' +
        startDate +
        '/' +
        finalDate,
    );
  }
}

export default ClassPlanService;
