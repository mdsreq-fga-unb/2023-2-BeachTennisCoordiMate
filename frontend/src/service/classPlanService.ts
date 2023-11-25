import Apiservice from './apiService';

class ClassPlanService extends Apiservice {
  constructor() {
    super('/classPlan');
  }

  async save(data: any) {
    return this.post('/', data);
  }
}

export default ClassPlanService;
