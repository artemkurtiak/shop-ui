import axios from 'axios';

import { Environment } from '@/shared/variables/environment';

const api = () => {
  const axiosInstance = axios.create({
    baseURL: Environment.NEXT_PUBLIC_API_URL,
  });

  return axiosInstance;
};

export default api();
