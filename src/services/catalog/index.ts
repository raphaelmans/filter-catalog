import request from 'api/request';
import { AxiosResponse } from 'axios';
import ARFilter from 'types/ar-filter';

export const getFilters = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/filters.json', '');
};

export const getARFilters = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/ar-filters.json', '');
};

export const getARFilterById = async (id: string): Promise<ARFilter> => {
    const res: AxiosResponse = await request('GET', '/data/ar-filters.json', '');
    return res.data.data.find((ar: ARFilter) => ar.id === id);
};
