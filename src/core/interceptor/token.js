import axios from 'axios';

// Request interceptor for API calls
axios.interceptors.request.use(
  config => {
    // TODO intercept request
    // config.headers = { 
    //   'Authorization': `Bearer ${keys.access_token}`,
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
    return config;
  },
  error => {
    Promise.reject(error)
});

export default { axios };