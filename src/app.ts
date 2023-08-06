import { RequestConfig } from '@umijs/max';
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'TESTUSER' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    layout: 'top',
    menu: {
      locale: false,
    },
  };
};
const baseUrl: string = 'http://localhost:8102/api/';
export const request: RequestConfig = {
  timeout: 300,
  baseURL: baseUrl,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  responseInterceptors: [
    (response) => {
      const { data = {} as any } = response;
      const { code } = data;
      if (code) {
      }
      return response;
    },
  ],
};
