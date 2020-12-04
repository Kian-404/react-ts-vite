import request from '../utils/request';
import '../mocks/index'


/**
 * @description: 获取Mock数据
 * @param {*}
 * @return {*}
 */
export const getMockData = (params: any) => {
  return request({
    url: '/mock',
    method: 'get',
    params
  })
}

/**
 * @description: 获取文章列表
 * @param {*}
 * @return {*}
 */
export const getArtileList = (params: any) => {
  return request({
    url: '/artile-list',
    method: 'get',
    params
  })
}

export const getBaseTable = (params: any) => {
  return request({
    url: '/base-table',
    method: 'get',
    params
  })
}