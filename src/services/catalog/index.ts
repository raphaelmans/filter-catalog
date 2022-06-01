import request from 'api/request';
import { AxiosResponse } from 'axios';

export const getSortFilters = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/sortFilters.json', '');
};

export const getFilters = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/filters.json', '');
};
