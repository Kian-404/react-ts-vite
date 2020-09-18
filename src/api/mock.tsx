import request from '../utils/request';
import '../mocks/index'
export const getMockData = (params: any) =>
  request({
    url: '/hello',
    method: 'get',
    params
  })