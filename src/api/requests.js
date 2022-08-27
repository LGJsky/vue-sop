import axios from 'axios'
import nprogress from "nprogress";
import 'nprogress/nprogress.css'



const requests = axios.create({
    baseURL:'http://127.0.0.1:8888/api/private/v1/',
    timeout:5000
})
//请求拦截器
requests.interceptors.request.use(config => {
    //进度条
    nprogress.start()
    return config;
},error => {
    return Promise.reject(error);
})
//响应拦截器
requests.interceptors.response.use(res =>{
    
    
    nprogress.done()
    return res
},error => {
    return Promise.reject(new Error('failed'))
})

export default requests;