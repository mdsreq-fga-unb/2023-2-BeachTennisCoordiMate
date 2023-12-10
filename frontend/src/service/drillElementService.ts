import Apiservice from './apiService';

class DrillElementService extends Apiservice {
  constructor() {
    super('/drillElement');
  }

  async save(data: any) {
    return this.post('/', data);
  }

  async getManyByDrillId(drillId: string) {
    return this.get('/' + drillId);
  }

  async updateById(id: string, data: any) {
    return this.put('/' + id, data);
  }

  async deleteById(id: string) {
    return this.delete('/' + id);
  }
}

export default DrillElementService;
