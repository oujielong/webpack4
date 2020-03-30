import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    debugger;
    return config;
  },
  function(error) {
    debugger;
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    debugger;
    return response;
  },
  function(error) {
    debugger;
    return Promise.reject(error);
  }
);
