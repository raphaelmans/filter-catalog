import request from 'api/request';
import { AxiosResponse } from 'axios';

export const getFilters = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/filters.json', '');
};

export const getARFilters = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/ar-filters.json', '');
};
