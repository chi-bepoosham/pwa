import { addToast } from '@heroui/react';
import axios, { AxiosRequestConfig } from 'axios';
import { deleteCookie, getCookie } from './cookies';

const config = {
  baseURL: `${process.env.NEXT_PUBLIC_CORE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status: number) {
    return status >= 200 && status < 400;
  },
  paramsSerializer: {
    indexes: null, // by default: false
  },
};

// Core without (auth)
const axiosCore = () => {
  const a = axios.create(config);
  a.interceptors.request.use((config) => {
    return config;
  });
  a.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(handleToastError(error));
    }
  );
  return a;
};

// Core with (auth)
const axiosCoreWithAuth = () => {
  const a = axios.create(config);
  a.interceptors.request.use(async (config) => {
    try {
      const token = await getCookie('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Token cookie not found:', error);
    }
    return config;
  });
  a.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async (error) => {
      return Promise.reject(await handleToastError(error));
    }
  );
  return a;
};

export { axiosCore, axiosCoreWithAuth };

// ======================================================> fetchers
type FetcherArgs =
  | string
  | [string, AxiosRequestConfig & { auth?: boolean }]
  | [string, AxiosRequestConfig & { headers?: Record<string, string> }];
export const fetcher = async (args: FetcherArgs) => {
  const [url, config = {}] = Array.isArray(args) ? args : [args, {}];
  const { headers, ...restConfig } = config;
  const axiosInstance = axiosCoreWithAuth();
  const res = await axiosInstance.get(url, {
    headers,
    ...restConfig,
  });

  return res;
};

// ======================================================> error handlers

type ErrorResponse = {
  response: {
    data: {
      message: string;
      error: string;
    };
    status: number;
  };
};

export const handleToastError = async (error: ErrorResponse) => {
  const response = error?.response;
  const status = error.response?.status;
  const messages = [];

  if (!response) {
    messages.push('خطای شبکه');
  } else {
    messages.push(
      response?.data?.message || response?.data?.error || `خطای ناشتاخته: ${response.status}`
    );
  }

  if (!error.response) {
    addToast({
      title: 'خطای شبکه',
      description: 'اتصال اینترنت خود را بررسی کنید',
      color: 'danger',
    });
    return null;
  }

  if (status === 401) {
    await deleteCookie('token', { path: '/' });
    await deleteCookie('userInfo', { path: '/' });

    addToast({ title: '.لطفا دوباره وارد شوید.', color: 'danger' });
    window.location.href = '/auth';
  }

  // show messages
  for (let idx = 0; idx < messages.length; idx++) {
    const msg = messages[idx];
    addToast({
      title: msg || 'خطای نامشخص 🥺',
      color: 'danger',
    });
  }

  return response?.data || null;
};
