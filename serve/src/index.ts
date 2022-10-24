import * as Koa from "koa";
import { routes, allowedMethods } from "./routes/index";
import { errorCatcher } from "./middlewares/errorCatcher";
import { logger } from "./middlewares/logger";
import koaBody = require("koa-body");
import cors = require("koa2-cors");
const app = new Koa();

app.use(errorCatcher); // 统一处理错误

app.use(
  cors({
    // origin:"*", 
    // maxAge: 5, // 本次预检请求的有效期，单位为秒。
    // allowMethods: ["GET", "POST"], // 所允许的HTTP请求方法
    // allowHeaders: ["Conten-Type", "Authorization", "Accept","x-access-token","Access-Control-Allow-Origin"], // 服务器支持的所有头信息字段
    credentials: true, // 是否允许发送Cookie
  })
);

app.use(
  koaBody({
    multipart: true, // 支持文件上传
    // encoding: 'gzip',
    // formidable: {
    // 	uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
    // 	keepExtensions: true,    // 保持文件的后缀
    // 	maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    // 	onFileBegin: (name, file) => { // 文件上传前的设置
    // 		// console.log(`name: ${name}`);
    // 		// console.log(file);
    // 	},
    // }
  })
);

app.use(logger); // 日志

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  // console.log('ctx.headers', ctx.headers['x-access-token']);
  // ctx.token = ctx.headers["x-access-token"]; // ctx.token 仅从请求头携带出来

  // ctx.request.header = {
  //   authorization: "Bearer " + (ctx.headers["x-access-token"] || ""),
  // }; // 有token 就可以验证  ctx.request.header配合koa-jwt去校验 的  (路由验证)

  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000'); //配置跨域资源共享
  // ctx.set('Access-Control-Allow-Credentials', 'true');
  await next();
});

app.use(routes);
app.use(allowedMethods);
// allowedMethods处理的业务是当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.

app.listen(8000, () => {
  console.log("success in 8000");
});
