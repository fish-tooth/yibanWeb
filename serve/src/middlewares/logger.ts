import * as Koa from "koa";

export async function logger(ctx: Koa.Context, next: Koa.Next) {
  const time = new Date();

  console.log(`-----${time.toLocaleString()}本次调用的信息start-----`);

  await logStart(ctx);
  await next();
  await logEnd(ctx);

  console.log(`-----${time.toLocaleString()}本次调用的信息end-------`);
}

/**
 * 开始调用
 */
async function logStart(ctx: Koa.Context) {
  let params = Object.assign({}, ctx.request.query, ctx.request.body);
  console.log(`loger日志: request.params:${JSON.stringify(params)}`);
}

/**
 * 结束调用
 */
async function logEnd(ctx: Koa.Context) {
  console.log(`loger日志: body:${JSON.stringify(ctx.body)}`);
}
