class HiControler {
  async hi(ctx, next) {
    ctx.body = 'hi';
    await next();
  }
}

module.exports = new HiControler();
