import * as Router from "koa-router";
import * as Koa from "koa";

import { errorResponse, successResponse } from "../common/response";

const router = new Router();


router.get("/api/getData", (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = successResponse({
    msg: "获取数据成功",
    data: {
      id: "aaa",
      username: "yiban",
    },
  });
});

router.post("/api/postData", (ctx: Koa.Context, next: Koa.Next) => {
  const { username } = Object.assign({}, ctx.request.query, ctx.request.body);
  if (username) {
    ctx.body = successResponse({
      msg: "获取数据成功",
      data: {
        id: "aaa",
        username: "yiban",
      },
    });
  } else {
    ctx.body = errorResponse({
      errMsg: "获取数据失败",
    });
  }
});

const routes = router.routes();
const allowedMethods = router.allowedMethods();

export { routes, allowedMethods };
