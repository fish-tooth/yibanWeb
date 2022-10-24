import * as Koa from "koa";
import { errorResponse } from "../common/response";

export async function errorCatcher(ctx: Koa.Context, next: Koa.Next) {
  /**
   * 捕获所有中间件执行的错误信息
   */
  try {
    await next();
  } catch (e) {
    console.error("errorCatch:", e);
    if (e == "UnauthorizedError: Authentication Error") {
      ctx.body = errorResponse({
        code: 600,
        errMsg: e.message,
      });
      return;
    }
    //  e.code 是undefined  就会选择默认的
    ctx.body = errorResponse({
      code: e.code,
      errMsg: e.message,
    });
  }
}
