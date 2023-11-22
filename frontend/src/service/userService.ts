import Apiservice from './apiService';

class userService extends Apiservice {
  constructor() {
    super('/user');
  }

  async save(data: any) {
    return this.post('/', data);
  }
}

export default userService;
