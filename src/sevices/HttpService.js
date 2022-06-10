import axios from "axios";
import { ACCESS_TOKEN,IS_LOGGED_IN,BASE_URL} from "./variable.config";
import { Navigate } from "react-router-dom";
axios.defaults.baseURL = `http://localhost:3002`;
//axios.defaults.headers.common['Authorization']=`${ACCESS_TOKEN}`
axios.interceptors.request.use(
  (request) => {
    //console.log(request);
    return request;
  },
  (error) => {
    //console.log(error);
    return Promise.request;
  }
);

axios.interceptors.response.use(
  (response) => {
    //console.log(response);
    return response;
  },
  (error) => {
   // console.log(error);
    return Promise.response;
  }
);
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch:axios.patch,
};
export default http;
