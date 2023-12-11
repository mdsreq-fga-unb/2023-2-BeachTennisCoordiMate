import Apiservice from './apiService';

class DrillService extends Apiservice {
  constructor() {
    super('/drill');
  }

  async save(data: any) {
    return this.post('/', data);
  }

  async getManyByClassPlanId(classPlanId: string) {
    return this.get('/' + classPlanId);
  }

  async updateById(id: string, data: any) {
    return this.put('/' + id, data);
  }

  async updateImage(id: string, data: any) {
    return this.put('/image/' + id, data);
  }

  async deleteById(id: string) {
    return this.delete('/' + id);
  }

  async getById(id: string) {
    return this.get('/drill/' + id);
  }
}

export default DrillService;
