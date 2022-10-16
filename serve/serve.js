const Koa = require('koa');
const router = require('./routes/index');
const errorCatcher = require('./middlewares/errorCatcher');
const logger = require('./middlewares/logger');
const koaBody = require('koa-body');
const cors = require('koa2-cors')
const app = new Koa();

app.use(errorCatcher); // 统一处理错误
app.use(cors({
	origin: "*", // 允许来自指定域名请求
	// maxAge: 5, // 本次预检请求的有效期，单位为秒。
	methods: ['GET', 'POST'],  // 所允许的HTTP请求方法
	alloweHeaders: ['Conten-Type'], // 服务器支持的所有头信息字段
	credentials: true // 是否允许发送Cookie
}))

app.use(koaBody({
	multipart: true, // 支持文件上传
}));

app.use(logger); // 日志

app.use(router.routes);



app.listen(8000, () => {
	console.log("success in 8000")
})
