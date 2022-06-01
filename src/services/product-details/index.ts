import request from 'api/request';
import { AxiosResponse } from 'axios';

export const getProductDetails = async (): Promise<AxiosResponse> => {
    return request('GET', '/data/product-details.json', '');
};
