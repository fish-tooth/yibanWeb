import axios, { AxiosRequestConfig,AxiosResponse } from "axios";
import { config } from "./config";
import { ResType } from "./type"

const instance = axios.create(config);

const successResponse = ({
  code = 200,
  status = "success",
  data = {},
  msg = "",
}) => {
  return { code, status, data, msg };
};
const errorResponse = ({
  code = 400,
  status = "error",
  data = {},
  msg = "",
}) => {
  return { code, status, data, msg };
};
const useConfig = (config: AxiosRequestConfig) => {
  // const token = localStorage.getItem("token") || "";
  // return {
  //   ...config,
  //   headers: {
  //     "x-access-token": token, // 请求头中携带token信息
  //   },
  // };
};

instance.interceptors.request.use(useConfig);

const useResponse = (response: AxiosResponse) => {
  //  response 含有很多信息，这只要抽取其中的data就是我们自定义后端返回的 
  const { data } = response;
  return data;
};

instance.interceptors.response.use(useResponse);

const request = async (config: AxiosRequestConfig): Promise<ResType> => {
  const res = await instance.request<any,ResType>(config);
  if (res.status === "success") { 
    return successResponse({
      data: res.data,
      msg: res.msg,
    });
  } else {
    return errorResponse({
      msg: res.errMsg,
    });
  }
};

const get = (url: string, params: any = null) => {
  return request({
    url,
    method: "get",
    params,
  });
};

const post = (url: string, data = {}) => {
  return request({
    url,
    method: "post",
    data,
  });
};


export { get, post };
