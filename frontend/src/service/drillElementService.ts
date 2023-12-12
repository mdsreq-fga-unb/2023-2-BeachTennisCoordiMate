import Apiservice from './apiService';

class DrillElementService extends Apiservice {

  token = localStorage.getItem('token') as string;
  user = localStorage.getItem('user');

  constructor() {
    super('/drillElement');
  }

  async save(data: any) {
    return this.post('/', data, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  async getManyByDrillId(drillId: string) {
    return this.get('/' + drillId, {
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
}

export default DrillElementService;
