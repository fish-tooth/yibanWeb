import axios from "axios";


const URL= "http://localhost:8000";
// const URL= "http://yiban.site:9000";

const config = {
  // 默认地址
  baseURL: URL ,
  // 设置超时时间
  timeout: RequestEnums.TIMEOUT,
  // 跨域时候允许携带凭证
  //   withCredentials: true,
};

