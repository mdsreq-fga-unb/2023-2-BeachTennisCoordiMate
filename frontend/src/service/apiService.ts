import axios from 'axios';

const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://beachtenniscoordimate.onrender.com'
      : 'http://localhost:3000',
});

class Apiservice {
  apiurl: string;
  constructor(apiurl: string) {
    this.apiurl = apiurl;
  }

  post(url: any, objeto: any) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, objeto);
  }

  put(url: any, objeto: any) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.put(requestUrl, objeto);
  }

  delete(url: any) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.delete(requestUrl);
  }

  get(url: any) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl);
  }
}

export default Apiservice;
