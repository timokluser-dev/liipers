import axios, {AxiosInstance} from 'axios';

export function createApiClient(): AxiosInstance {
  return axios.create({
    baseURL: process.env.VUE_APP_ZEBRA_BASE_URL || 'https://zebra.liip.ch/api/v2/',
    params: {
      // prepend token as url param
      token: process.env.VUE_APP_ZEBRA_TOKEN,
    },
  });
}
