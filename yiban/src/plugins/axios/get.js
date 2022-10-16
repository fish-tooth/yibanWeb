import axios from "./index";

export const getUsers = () => {
  // 返回的数据格式可以和服务端约定
  return axios.getUsers("/api/getUsers");
};


