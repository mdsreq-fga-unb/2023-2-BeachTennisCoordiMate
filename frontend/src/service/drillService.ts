import Apiservice from './apiService';

class DrillService extends Apiservice {

  token = localStorage.getItem('token') as string;
  user = localStorage.getItem('user');
  constructor() {
    super('/drill');
  }

  async save(data: any) {
    return this.post('/', data, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async getManyByClassPlanId(classPlanId: string) {
    return this.get('/' + classPlanId, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async updateById(id: string, data: any) {
    return this.put('/' + id, data, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async deleteById(id: string) {
    return this.delete('/' + id, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async getById(id: string) {
    return this.get('/drill/' + id, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}

export default DrillService;
