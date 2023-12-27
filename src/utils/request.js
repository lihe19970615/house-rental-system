import axios from 'axios'

//配置每次请求的根地址
axios.defaults.baseURL = 'http://39.100.105.236:8888/'
// axios.defaults.baseURL = 'http://192.168.8.184:8888/'

axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

// 加请求拦截器添
axios.interceptors.request.use(function (config) {
  config.headers["token"] = '2fd28eb9f3ce42c6a7cf49a8cebbb98d';
  config.headers['content-type'] = 'application/json';
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios