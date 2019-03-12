import axios from 'axios'






let BASE_API = 'http://172.0.1.0'

//通用配置的axios实例
const service = axios.create({
    baseURL: BASE_API+"/api/rest/v2.0", // api的base_url
    timeout: 5000 // 请求超时时间
})



// request请求前拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})


// respone 响应后拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        console.log("api response data =====")
        console.log(response.data)
        return response
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service