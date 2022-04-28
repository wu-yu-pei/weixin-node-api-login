const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const hiRouter = require('./router/hi');
const loginRouter = require('./router/login');

// 数据库
require('./database/index.js');

const { PORT } = require('./config/consts');

const app = new Koa();

// 解析body参数中间件
app.use(bodyParser());

// router
app.use(hiRouter.routes());
app.use(loginRouter.routes());

app.listen(PORT, () => {
  console.log('server is runing at 7878....');
});
