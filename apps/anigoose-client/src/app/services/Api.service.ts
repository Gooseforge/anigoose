import Axios from 'axios';
import { environment } from '../../environments/environment';

const API_URL = `http://${environment.apiUrl}:${environment.apiPort}/api`;
const ApiClient = Axios.create({
  baseURL: API_URL,
  timeout: 10 * 1000
});

export const SetUserToken = (token: string) =>
  (ApiClient.defaults.headers['Authorization'] = `Bearer ${token}`);

export const UserLogin = ({ username, password }) =>
  ApiClient.post('/auth/login', { username, password })
    .then(response => {
      const { token } = response.data;

      window.sessionStorage.setItem('_token', token);
      SetUserToken(token);

      return response.data;
    })
    .catch(error => {
      return error;
    });
