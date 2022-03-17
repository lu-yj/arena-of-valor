import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from './router';

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api',
});

// axios请求拦截器
http.interceptors.request.use((config: any) => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + (localStorage.token || '');
  }
  return config;
});

// axios响应拦截器
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.data.message) {
      ElMessage.error(err.response.data.message);
      if (err.response.status === 401) {
        router.push('/login');
      }
    }
    return Promise.reject(err);
  }
);

export default http;
