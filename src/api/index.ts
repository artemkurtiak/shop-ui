import { Environment } from '@/shared/variables/environment';
import axios from 'axios';

const api = () => {
  const axiosInstance = axios.create({
    baseURL: Environment.NEXT_PUBLIC_API_URL,
  });

  return axiosInstance;
};

export default api();
