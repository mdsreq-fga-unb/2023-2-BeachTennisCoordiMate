import Apiservice from './apiService';
import axios from 'axios';

const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'produrl'
      ? 'https://beachtenniscoordimate.onrender.com'
      : 'http://localhost:3000',
});

class ClassPlanService extends Apiservice {
  constructor() {
    super('/classPlan');
  }

  async save(data: any) {
    return this.post('/', data);
  }
  get(url: any) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl);
  }

  async getManyById(userId: string) {
    return this.get('/' + userId);
  }
}

export default ClassPlanService;
