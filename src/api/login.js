import request from './request'



//登录请求
export const doLoginRest = params => {
    return request({
        url:'/login',
        method:'put',
        params:params
    })
}