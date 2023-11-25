import Apiservice from './apiService';

class userService extends Apiservice {
  constructor() {
    super('/user');
  }
  async login(email: string, password: string) {
    return this.post('/login', {
      "email": email,
      "password": password,
    });
  }

  async save(data: any) {
    return this.post('/', data);
  }
}

export default userService;
