// about us
import { get, post } from "../axios";
import { loginType } from "./type";

// 获取关于我们的信息
const getAboutUs = async () => {
  return await get("/api/getAboutUs");
};

// 验证token
const isLogining = async () => {
  return await post("/api/verifyToken");
};

// 登录
const login = async (data: loginType) => {
  return await post("/api/login", data);
};

// 更改密码
const changePassword = async (data: loginType) => {
  return await post("/api/changePassword", data);
};

export { getAboutUs, login, isLogining, changePassword };