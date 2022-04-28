const KoaRouter = require('koa-router');
const HiControler = require('../controler/hi');

const hiRouter = new KoaRouter();

hiRouter.get('/hi', HiControler.hi);

module.exports = hiRouter;
