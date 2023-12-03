import Apiservice from './apiService';



class ViewPlanService extends Apiservice {
  constructor() {
    super("/classPlan");
  }
  async save(data: any) {
    return this.post('/', data);
  }
}

export default new ViewPlanService();