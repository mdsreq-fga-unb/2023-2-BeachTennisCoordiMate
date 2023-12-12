import Apiservice from './apiService';

class ClassPlanService extends Apiservice {

  token = localStorage.getItem('token') as string;
  user = localStorage.getItem('user');

  constructor() {
    super('/classPlan');
  }

  async save(data: any) {
    return this.post('/', data, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async getById(id: string) {
    return this.get('/' + id, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async getManyById(userId: string) {
    return this.get('/planos-usuario/' + userId, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async remove(id: string) {
    return this.delete('/' + id, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async updateById(id: string, data: any) {
    return this.put('/' + id, data, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
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
      {
        headers: { Authorization: `Bearer ${this.token}` },
      }
    );
  }
}

export default ClassPlanService;
