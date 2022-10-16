const CODE = {
  success: 200,
  error: 400,
};
/**
 * 调用成功的返回结果
 * @param {number} code 状态码
 * @param {string} status 状态
 * @param {object} data 返回数据
 * @param {string} msg 返回信息
 */
function successResponse({ code = CODE.success, status = 'success', data = {}, msg = '' }) {
  return {
    code,
    status,
    data,
    msg,
  };
}

/**
 * 调用失败的返回结果
 * @param {number} code 状态码
 * @param {string} status 状态
 * @param {string} errMsg 错误信息
 */
function errorResponse({ code = CODE.error, status = 'error', errMsg = '' }) {
  return {
    code,
    status,
    errMsg,
  };
}
// ===exports
module.exports = {
  successResponse,
  errorResponse,
  CODE,
};
