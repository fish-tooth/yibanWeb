/**
 * 调用成功的返回结果
 * @param {number} code 状态码
 * @param {string} status 状态
 * @param {object} data 返回数据
 * @param {string} msg 返回信息
 */
type successResponse = {
  code: number;
  status: string;
  data: object;
  msg: string;
};

/**
 * 调用失败的返回结果
 * @param {number} code 状态码
 * @param {string} status 状态
 * @param {string} errMsg 错误信息
 */

type errorResponse = {
  code: number;
  status: string;
  errMsg: string;
};

export type{ successResponse, errorResponse };
