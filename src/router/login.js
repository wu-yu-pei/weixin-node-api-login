const KoaRouter = require('koa-router');
const LoginControler = require('../controler/login.js');
const loginRouter = new KoaRouter();

loginRouter.post('/login', LoginControler.login);

module.exports = loginRouter;
