/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";

// 环境的切换
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "/api/";
} else if (process.env.NODE_ENV == "debug") {
  axios.defaults.baseURL = "/api/";
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "/api/";
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  // 服务器状态码不是200的情况
  error => {
    return Promise.reject(error.response.data);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const put = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const del = (url = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {
  post,
  get,
  put,
  del
};
