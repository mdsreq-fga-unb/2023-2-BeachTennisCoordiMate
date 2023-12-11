import axios from 'axios';

const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'produrl'
      ? 'https://beachtenniscoordimate.onrender.com'
      : 'http://localhost:3000',
});

class Apiservice {
  apiurl: string;
  constructor(apiurl: string) {
    this.apiurl = apiurl;
  }

  post(url: any, objeto: any, data: any = {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.post(requestUrl, objeto, data);
  }

  put(url: any, objeto: any, objeto2: any = {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.put(requestUrl, objeto, objeto2);
  }

  delete(url: any, objeto: any = {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.delete(requestUrl, objeto);
  }

  get(url: any, objeto: any = {}) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpClient.get(requestUrl, objeto);
  }
}

export default Apiservice;
